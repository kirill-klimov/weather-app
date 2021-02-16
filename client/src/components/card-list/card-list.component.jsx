import React from 'react';
import Card from '../card/card.component';
import * as S from './card-list.styles';

const CardList = () => {
  return (
    <S.Container>
      <Card custom={0} />
      <Card custom={1} />
      <Card custom={2} />
      <Card custom={3} />
      <Card custom={4} />
    </S.Container>
  )
}

export default CardList;