import React from 'react';

import * as S from './city-weather-image.styles';

const CityWeatherImage = () => {
  return (
    <S.Container>
      <S.Image className="img1" src="/assets/cloud.png" />
      <S.Image className="img2" src="/assets/cloud.png" />
      <S.Image className="img3" src="/assets/cloud.png" />
      <S.Image className="img4" src="/assets/cloud.png" />
      <S.CenterImage src="https://www.metaweather.com/static/img/weather/s.svg" />
    </S.Container>
  );
}

export default CityWeatherImage;