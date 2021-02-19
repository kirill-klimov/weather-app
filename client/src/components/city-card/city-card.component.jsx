import React from 'react';
import LocationButton from '../location-button/location-button.component';
import CityWeatherImage from '../city-weather-image/city-weather-image.component';
import CityText from '../city-text/city-text.component';
import { useDispatch, connect } from 'react-redux';
import { setSearchMenu } from '../../redux/ui/ui.actions';

import * as S from './city-card.styles.js';
import CitySearch from '../city-search/city-search.component';

const CityCard = ({ searchMenu, data, unit }) => {
  const dispatch = useDispatch();

  const todayData = data ? data.consolidated_weather[0] : {};
  const { weather_state_abbr } = todayData;
  const title = data ? data.title : '';

  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.SearchButton onClick={() => dispatch(setSearchMenu(true))}>Search for places</S.SearchButton>
        <LocationButton />
      </S.ButtonsContainer>
      <CityWeatherImage weather_state_abbr={weather_state_abbr} />
      <CityText title={title} unit={unit} {...todayData} />
      {
        searchMenu ? <CitySearch /> : null
      }
    </S.Container>
  );
}

const mapStateToProps = state => ({ 
  searchMenu: state.ui.searchMenu,
  data: state.weather.data,
  unit: state.weather.unit
});

export default connect(mapStateToProps)(CityCard);
