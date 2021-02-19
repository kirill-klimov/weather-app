import React from 'react';
import CardList from '../card-list/card-list.component';
import Units from '../units/units.component';
import HighlightList from '../highlight-list/highlight-list.component';
import * as S from './data.styles';
import Footer from '../footer/footer.component';

const Data = () => {
  return (
    <S.Container>
      <S.ContentWrap>
        <Units />
        <CardList />
        <HighlightList />
        <Footer />
      </S.ContentWrap>
    </S.Container>
  );
}

export default Data;