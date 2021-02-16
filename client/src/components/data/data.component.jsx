import React from 'react';
import CardList from '../card-list/card-list.component';
import Units from '../units/units.component';
import Highlights from '../highlights/highlights.component';
import * as S from './data.styles';
import Footer from '../footer/footer.component';

const Data = () => {
  return (
    <S.Container>
      <S.ContentWrap>
        <Units />
        <CardList />
        <Highlights />
        <Footer />
      </S.ContentWrap>
    </S.Container>
  );
}

export default Data;