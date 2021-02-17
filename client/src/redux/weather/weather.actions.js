import { WeatherActionTypes } from './weather.types';

export const setUnit = (unit) => ({
  type: WeatherActionTypes.SET_UNIT,
  payload: unit
});

export const fetchDataStart = (requestParams) => ({
  type: WeatherActionTypes.FETCH_DATA_START,
  payload: requestParams
});

export const fetchDataSuccess = (data) => ({
  type: WeatherActionTypes.FETCH_DATA_SUCCESS,
  payload: data
});

export const fetchDataFailure = (error) => ({
  type: WeatherActionTypes.FETCH_DATA_FAILURE,
  payload: error
});