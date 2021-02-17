import { all, call } from 'redux-saga/effects';

import weatherSaga from './weather/weather.sagas';

function* rootSaga () {
  yield all([
    call(weatherSaga)
  ]);
}

export default rootSaga;