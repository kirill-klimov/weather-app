import { WeatherActionTypes, UnitTypes } from './weather.types';
import { initWeatherData } from './data';

const init_state = {
  data: initWeatherData,
  query: [
    {title: "St Petersburg", woeid: 2123260},
    {title: "Moscow", woeid: 2122265},
    {title: "London", woeid: 44418},
    {title: "Los Angeles", woeid: 2442047},
    {title: "Stockholm", woeid: 906057}
  ],
  loading: false,
  error: null,
  unit: UnitTypes.Celsius,
}

const weatherReducer = (state=init_state, action) => {
  switch(action.type) {
    case WeatherActionTypes.SET_UNIT:
      return {
        ...state,
        unit: action.payload
      }
    case WeatherActionTypes.FETCH_DATA_START:
    case WeatherActionTypes.QUERY_DATA_START:
    case WeatherActionTypes.INIT_FETCH_DATA_START:
    case WeatherActionTypes.GET_USER_GEO_START:
      return {
        ...state,
        loading: true,
      }
    case WeatherActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      }
    case WeatherActionTypes.QUERY_DATA_SUCCESS:
      return {
        ...state,
        query: action.payload,
        loading: false,
        error: null,
      }
    case WeatherActionTypes.FETCH_DATA_FAILURE:
    case WeatherActionTypes.QUERY_DATA_FAILURE:
    case WeatherActionTypes.GET_USER_GEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case WeatherActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}

export default weatherReducer;