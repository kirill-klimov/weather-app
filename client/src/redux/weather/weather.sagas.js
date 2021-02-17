import { WeatherActionTypes } from './weather.types';
import { takeLatest, all, call } from 'redux-saga/effects';

function* fetchData ({ payload }) {
  const { location } = payload;
  
}

function* fetchDataStart () {
  yield takeLatest(WeatherActionTypes.FETCH_DATA_START, fetchData);
}

function* weatherSaga() {
  yield all([
    call(fetchDataStart),
  ]);
}

export default weatherSaga;