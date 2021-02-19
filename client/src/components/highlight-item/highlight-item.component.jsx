import React from 'react';
import * as S from './highlight-item.styles';

const HighlightItem = ({ title, value, unit, custom, controls, variants, children }) => {
  return (
    <S.Card 
      initial={{transform: "scale(0)"}}
      custom={custom}
      variants={variants}
      animate={controls}>
      <S.Title>{title}</S.Title>
      <S.DataContainer>
        <S.DataText>{value}</S.DataText>
        <S.DataUnit>{unit}</S.DataUnit>
      </S.DataContainer>
      {
        children ? children : null
      }
    </S.Card>
  )
}

export default HighlightItem;