import React from 'react';
import * as S from './city-text.styles';
import { UnitTypes } from '../../redux/weather/weather.types';
import { toFahrenheit } from '../../utils.js';

const CityText = ({ title, the_temp, weather_state_name, applicable_date, unit }) => {
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const dateString = (new Date(applicable_date)).toLocaleDateString("en-US", options);
  return (
    <S.Container>
      <S.TemperatureContainer>
        <S.TemperatureNumber>
          { Math.round(UnitTypes.Celsius === unit ? the_temp : toFahrenheit(the_temp)) }
        </S.TemperatureNumber>
        <S.TemperatureUnit>
          { UnitTypes.Celsius === unit ? '°C' : '°F' }
        </S.TemperatureUnit>
      </S.TemperatureContainer>
      <S.WeatherType>{weather_state_name}</S.WeatherType>
      <S.DateText>Today · {dateString}</S.DateText>
      <S.PlaceText><S.LocationMark />{title}</S.PlaceText>
    </S.Container>
  );
}

export default CityText;