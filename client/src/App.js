// import logo from './logo.svg';
import './App.css';
// import { createContext, useReducer, useState, useContext } from 'react';

import CityCard from './components/city-card/city-card.component';
import Data from './components/data/data.component';

import * as S from './App.styles.js';

const App = () => {
  return (
    <S.Container>
      <CityCard />
      <Data />
    </S.Container>
  );
}

export default App;