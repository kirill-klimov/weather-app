import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  queryDataSuccess,
  queryDataFailure,
  getUserGeoFailure,
} from '../../redux/weather/weather.actions';
import { setSearchMenu } from '../../redux/ui/ui.actions';
import axios from 'axios';

import * as S from './location-button.styles';

const LocationButton = () => {

  const dispatch = useDispatch();

  const handleClick = () => {

    const success = async (position) => {
      const {latitude, longitude}  = position.coords;
      const [lat, long] = [latitude, longitude];
  
      const url = '/api/latlong';
  
      try {
        const { data } = await axios.get(url, {
          params: { lat, long }
        });
        dispatch(setSearchMenu(true));
        dispatch(queryDataSuccess(data));
      }
      catch (error) {
        dispatch(queryDataFailure(error));
      }
    }
  
    const error = async () => {
      dispatch(getUserGeoFailure( { 
        error: true, 
        message: 'Unable to get location' 
      } ));
    }
  
    if(!navigator.geolocation) {
      dispatch(getUserGeoFailure( { 
        error: true, 
        message: 'Geolocation is not supported by your browser' 
      } ));
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return (
    <S.Button onClick={handleClick}>
       <S.LocationIcon width="28" height="28" />
    </S.Button>
  );
}

export default LocationButton;