import React from 'react';
import { useDispatch } from 'react-redux';
import { getUserGeoStart } from '../../redux/weather/weather.actions';

import * as S from './location-button.styles';

const LocationButton = () => {
  const dispatch = useDispatch();
  return (
    <S.Button onClick={() => dispatch(getUserGeoStart())}>
       <S.LocationIcon width="28" height="28" />
    </S.Button>
  );
}

export default LocationButton;