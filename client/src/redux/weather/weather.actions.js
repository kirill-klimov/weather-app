import { WeatherActionTypes } from './weather.types';

export const setUnit = (unit) => ({
  type: WeatherActionTypes.SET_UNIT,
  payload: unit
});

export const queryDataStart = (requestParams) => ({
  type: WeatherActionTypes.QUERY_DATA_START,
  payload: requestParams
});

export const queryDataSuccess = (data) => ({
  type: WeatherActionTypes.QUERY_DATA_SUCCESS,
  payload: data
});

export const queryDataFailure = (error) => ({
  type: WeatherActionTypes.QUERY_DATA_FAILURE,
  payload: error
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

export const initFetchDataStart = () => ({
  type: WeatherActionTypes.INIT_FETCH_DATA_START
})

export const getUserGeoStart = () => ({
  type: WeatherActionTypes.GET_USER_GEO_START,
})

export const getUserGeoFailure = (error) => ({
  type: WeatherActionTypes.GET_USER_GEO_FAILURE,
  payload: error
})