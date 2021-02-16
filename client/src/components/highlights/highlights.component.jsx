import React from 'react';
import * as S from './highlights.styles';
import { useAnimation } from 'framer-motion';

const Highlights = () => {
  const controls = useAnimation();

  controls.start({
    transform: 'scale(1)'
  });

  return (
    <S.Container>
      <S.Header>Today's Highlights</S.Header>
      <S.Row>
        <S.Card initial={{transform: 'scale(0)'}} transition={{delay: 0}} animate={controls}>
          <S.Title>Wind status</S.Title>
          <S.DataContainer>
            <S.DataText>7</S.DataText>
            <S.DataUnit>mph</S.DataUnit>
          </S.DataContainer>
          <S.WindDataContainer>
            <S.Direction rotation={209} />
            <S.WindText>WSW</S.WindText>
          </S.WindDataContainer>
        </S.Card>
        <S.Card initial={{transform: 'scale(0)'}} transition={{delay: 1 * 0.05}} animate={controls}>
          <S.Title>Humidity</S.Title>
          <S.DataContainer>
            <S.DataText>84</S.DataText>
            <S.DataUnit>%</S.DataUnit>
          </S.DataContainer>
          <S.ProgressContainer>
            <S.ScaleContainer>
              <S.ScaleLabel>0</S.ScaleLabel>
              <S.ScaleLabel>50</S.ScaleLabel>
              <S.ScaleLabel>100</S.ScaleLabel>
            </S.ScaleContainer>
            <S.BarContainer>
              <S.BarFill fill={84} />
            </S.BarContainer>
            <S.ScaleUnit>%</S.ScaleUnit>
          </S.ProgressContainer>
        </S.Card>
      </S.Row>
      <S.Row>
        <S.Card initial={{transform: 'scale(0)'}} transition={{delay: 2 * 0.05}} animate={controls}>
          <S.Title>Visibility</S.Title>
          <S.DataContainer>
            <S.DataText>6,4</S.DataText>
            <S.DataUnit>miles</S.DataUnit>
          </S.DataContainer>
        </S.Card>
        <S.Card initial={{transform: 'scale(0)'}} transition={{delay: 3 * 0.05}} animate={controls}>
          <S.Title>Air pressure</S.Title>
          <S.DataContainer>
            <S.DataText>1004</S.DataText>
            <S.DataUnit>mb</S.DataUnit>
          </S.DataContainer>
        </S.Card>
      </S.Row>
    </S.Container>
  )
}

export default Highlights;