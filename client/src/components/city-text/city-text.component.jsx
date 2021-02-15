import React from 'react';
import * as S from './city-text.styles';

const CityText = () => {
  return (
    <S.Container>
      <S.TemperatureContainer>
        <S.TemperatureNumber>15</S.TemperatureNumber>
        <S.TemperatureUnit>°C</S.TemperatureUnit>
      </S.TemperatureContainer>
      <S.WeatherType>Shower</S.WeatherType>
      <S.DateText>Today · Fri, 5 Jun</S.DateText>
      <S.PlaceText><S.LocationMark />Helsinki</S.PlaceText>
    </S.Container>
  );
}

export default CityText;