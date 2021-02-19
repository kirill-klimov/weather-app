import React, { useEffect } from 'react';
import * as S from './highlight-list.styles';
import { useAnimation } from 'framer-motion';
import { connect } from 'react-redux';
import HighlightItem from '../highlight-item/highlight-item.component';

const HighlightList = (props) => {
  const { data } = props; 

  const {
    wind_speed,
    wind_direction,
    wind_direction_compass,
    humidity,
    visibility,
    air_pressure
  } = data ? data.consolidated_weather[0] : {};

  const variants = {
    visible: (custom) => ({
      transform: "scale(1)",
      transition: {
        duration: 0.25,
        delay: custom * 0.02
      }
    })
  }

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  });

  return (    
    <S.Container>
      <S.Header>Today's Highlights</S.Header>
      {
        data ?
        <>
          <S.Row>
            <HighlightItem
              controls={controls}
              variants={variants}
              custom={0}
              title="Wind status"
              value={Math.round(wind_speed)}
              unit="mph" >
              <S.WindDataContainer>
                <S.Direction rotation={wind_direction} />
                <S.WindText>{wind_direction_compass}</S.WindText>
              </S.WindDataContainer>
            </HighlightItem>

            <HighlightItem
              controls={controls}
              variants={variants}
              custom={1}
              title="Humidity"
              value={humidity}
              unit="%" >
              <S.ProgressContainer>
                <S.ScaleContainer>
                  <S.ScaleLabel>0</S.ScaleLabel>
                  <S.ScaleLabel>50</S.ScaleLabel>
                  <S.ScaleLabel>100</S.ScaleLabel>
                </S.ScaleContainer>
                <S.BarContainer>
                  <S.BarFill fill={humidity} />
                </S.BarContainer>
                <S.ScaleUnit>%</S.ScaleUnit>
              </S.ProgressContainer>
            </HighlightItem>
          </S.Row>
          <S.Row>
            <HighlightItem 
              controls={controls}
              variants={variants}
              custom={2}
              title="Visibility"
              value={Math.round(visibility * 10) / 10}
              unit="miles" />
            <HighlightItem 
              controls={controls}
              variants={variants}
              custom={3}
              title="Air pressure"
              value={Math.round(air_pressure)}
              unit="mb" />
          </S.Row> 
        </>
        : null
      }
    </S.Container>
  )
}

const mapStateToProps = state => ({
  data: state.weather.data
})

export default connect(mapStateToProps)(HighlightList);