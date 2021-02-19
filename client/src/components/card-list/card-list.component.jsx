import React, { useEffect } from 'react';
import Card from '../card/card.component';
import * as S from './card-list.styles';
import { useAnimation } from 'framer-motion';
import { connect } from 'react-redux';

const CardList = ({ data, unit }) => {
  const controls = useAnimation();

  const variants = {
    visible: (custom) => ({
      transform: 'scale(1)',
      transition: {
        duration: 0.25,
        delay: custom * 0.05,
      }
    })
  };

  useEffect(() => {
    controls.start("visible");
  })

  return (
    <S.Container>
      {
        data ?
        data.consolidated_weather.slice(1, data.consolidated_weather.length).map((item, i) => (
          <Card
            key={item.id}
            custom={i}
            initial={{transform: 'scale(0)'}}
            variants={variants}
            animate={controls}
            unit={unit}
            {...item}
           />
        ))
        : null
      }
    </S.Container>
  )
}

const mapStateToProps = state => ({
  data: state.weather.data,
  unit: state.weather.unit
})

export default connect(mapStateToProps)(CardList);