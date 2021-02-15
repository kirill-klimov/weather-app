import React, { useState } from 'react';
import LocationButton from '../location-button/location-button.component';
import CityWeatherImage from '../city-weather-image/city-weather-image.component';
import CityText from '../city-text/city-text.component';

import * as S from './city-card.styles.js';
import CitySearch from '../city-search/city-search.component';

const CityCard = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.SearchButton onClick={() => setHidden(!hidden)}>Search for places</S.SearchButton>
        <LocationButton />
      </S.ButtonsContainer>
      <CityWeatherImage />
      <CityText />
      {
        hidden ? null : <CitySearch setHidden={setHidden} />
      }
    </S.Container>
  );
}

export default CityCard;
