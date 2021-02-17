import { WeatherActionTypes, UnitTypes } from './weather.types';

const init_state = {
  data: null,
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
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}

export default weatherReducer;