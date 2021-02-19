import { WeatherActionTypes } from './weather.types';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { getUserGeo } from '../../utils';
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
  const res = yield getUserGeo();

  if (!res) return yield put(getUserGeoFailure({
    error: true,
    message: 'Unable to get location'
  }));

  if (res.error) return yield put(getUserGeoFailure(res));
    
  const { lat, long } = res;

  const url = '/api/latlong';

  try {
    const { data } = yield axios.get(url, {
      params: { lat, long }
    });
    yield put(setSearchMenu(true));
    yield put(queryDataSuccess(data));
  }
  catch (error) {
    yield put(queryDataFailure(error));
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