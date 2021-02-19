import { WeatherActionTypes } from './weather.types';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  queryDataSuccess,
  queryDataFailure,
  fetchDataSuccess,
  fetchDataFailure,
} from '../weather/weather.actions';


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






function* weatherSaga() {
  yield all([
    call(queryDataStart),
    call(fetchDataStart),
    call(initFetchDataStart),
  ]);
}

export default weatherSaga;