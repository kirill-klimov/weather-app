import React from 'react';
import * as S from './card.styles';
import { useAnimation } from 'framer-motion';

const Card = ({custom}) => {
  const controls = useAnimation();

  controls.start({
    transform: 'scale(1)',
    transition: {delay: custom * 0.05}  
  });

  return (
    <S.Container initial={{transform: 'scale(0)'}} custom={custom} animate={controls}>
      <S.DayText>Tommorow</S.DayText>
      <S.ImageContainer>
        <S.Image src="https://www.metaweather.com/static/img/weather/s.svg" alt="" />
      </S.ImageContainer>
      <S.TemperatureTextContainer>
        <S.TemperatureText>16 °C</S.TemperatureText>
        <S.TemperatureText>11 °C</S.TemperatureText>
      </S.TemperatureTextContainer>
    </S.Container>
  )
}

export default Card;