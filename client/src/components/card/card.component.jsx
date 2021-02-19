import React from 'react';
import * as S from './card.styles';

import { UnitTypes } from '../../redux/weather/weather.types';
import { toFahrenheit } from '../../utils';

const Card = (props) => {
  const { custom, initial, variants, animate } = props;
  const {
    applicable_date,
    max_temp,
    min_temp,
    weather_state_abbr,
    unit
  } = props;

  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const today = (new Date()).getDay();
  const date = new Date(applicable_date);

  return (
    <S.Container
    custom={custom}
    initial={initial}
    variants={variants}
    animate={animate} >
      <S.DayText>
        {
          date.getDay() === (today + 1) ?
          "Tommorow" :
          date.toLocaleDateString("en-US", options)
        }
      </S.DayText>
      <S.ImageContainer>
        <S.Image src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`} alt="weather state" />
      </S.ImageContainer>
      <S.TemperatureTextContainer>
        <S.TemperatureText>
          {
            UnitTypes.Celsius === unit ?
            Math.round(max_temp) + '°C' :
            Math.round(toFahrenheit(max_temp)) + '°F'
          }
        </S.TemperatureText>
        <S.TemperatureText>
          {
            UnitTypes.Celsius === unit ?
            Math.round(min_temp) + '°C' :
            Math.round(toFahrenheit(min_temp)) + '°F'
          }
        </S.TemperatureText>
      </S.TemperatureTextContainer>
    </S.Container>
  )
}

export default Card;