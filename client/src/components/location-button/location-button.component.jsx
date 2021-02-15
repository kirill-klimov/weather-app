import React from 'react';

import * as S from './location-button.styles';

const LocationButton = () => {
  return (
    <S.Button>
       <S.LocationIcon width="28" height="auto" />
    </S.Button>
  );
}

export default LocationButton;