// import logo from './logo.svg';
import './App.css';
import { connect, useDispatch } from 'react-redux';

import CityCard from './components/city-card/city-card.component';
import Data from './components/data/data.component';
import Loader from './components/loader/loader.component';

import * as S from './App.styles.js';
import { useEffect } from 'react';
import { initFetchDataStart } from './redux/weather/weather.actions';

const App = ({ loading, error }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initFetchDataStart());
  }, [dispatch]);

  return (
    <S.Container>
      <CityCard />
      <Data />
      <Loader loading={loading} error={error} />
    </S.Container>
  );
}

const mapStateToProps = state => ({
  loading: state.weather.loading,
  error: state.weather.error
})

export default connect(mapStateToProps)(App);