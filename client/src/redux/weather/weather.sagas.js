import { WeatherActionTypes } from './weather.types';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  queryDataSuccess,
  queryDataFailure,
  fetchDataSuccess,
  fetchDataFailure,
  getUserGeoFailure,
} from '../weather/weather.actions';
import { setSearchMenu } from '../../redux/ui/ui.actions';


// Find available locations
function* queryData ({ payload }) {
  const { location } = payload;
  const url = '/api/query';
  try {
    const { data } = yield axios.get(url, {
      params: { location }
    });
    yield put(queryDataSuccess(data));
  }
  catch (error) {
    yield put(queryDataFailure(error));
  }
}

function* queryDataStart () {
  yield takeLatest(WeatherActionTypes.QUERY_DATA_START, queryData);
}



// Fetch weather data by woeid
function* fetchData ({ payload }) {
  const { woeid } = payload;
  const url = '/api/location';
  try {
    const { data } = yield axios.get(url, {
      params: { woeid }
    });
    yield put(fetchDataSuccess(data));
  }
  catch (error) {
    yield put(fetchDataFailure(error));
  }
}

function* fetchDataStart () {
  yield takeLatest(WeatherActionTypes.FETCH_DATA_START, fetchData);
}

// Initial fetch
function* initFetchData () {
  const url = '/api/init';
  try {
    const { data } = yield axios.get(url);
    yield put(fetchDataSuccess(data));
  }
  catch (error) {
    yield put(fetchDataFailure(error));
  }
}

function* initFetchDataStart () {
  yield takeLatest(WeatherActionTypes.INIT_FETCH_DATA_START, initFetchData);
}



function* _getUserGeo () {

  const success = async (position) => {
    const {latitude, longitude}  = position.coords;
    const [lat, long] = [latitude, longitude];

    const url = '/api/latlong';

    try {
      const { data } = await axios.get(url, {
        params: { lat, long }
      });
      await put(setSearchMenu(true));
      await put(queryDataSuccess(data));
    }
    catch (error) {
      await put(queryDataFailure(error));
    }
  }

  const error = async () => {
    await put(getUserGeoFailure( { 
      error: true, 
      message: 'Unable to get location' 
    } ));
  }

  if(!navigator.geolocation) {
    yield put(getUserGeoFailure( { 
      error: true, 
      message: 'Geolocation is not supported by your browser' 
    } ));
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

function* getUserGeoStart () {
  yield takeLatest(WeatherActionTypes.GET_USER_GEO_START, _getUserGeo);
}




function* weatherSaga() {
  yield all([
    call(queryDataStart),
    call(fetchDataStart),
    call(initFetchDataStart),
    call(getUserGeoStart),
  ]);
}

export default weatherSaga;