import { combineReducers } from 'redux';
import uiReducer from './ui/ui.reducer';
import weatherReducer from './weather/weather.reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  ui: uiReducer,
});

export default rootReducer;