import styled from 'styled-components';
import { ReactComponent as Mark } from '../../assets/location_on-24px.svg';
import * as C from '../../style';

export const Container = styled.div`
  text-align: center;
  color: ${C.CityTextGray};
`;

export const TemperatureNumber = styled.span`
  color: ${C.CityTextWhite};
  font-size: 6rem;
  line-height: 6rem;
`;

export const TemperatureUnit = styled.span`
  font-size: 2rem;
`;

export const TemperatureContainer = styled.div`
`;

export const WeatherType = styled.span`
  display: block;
  font-size: 1.5rem;
  margin: 50px 0;
`;

export const DateText = styled.span`
  display: block;
  margin-bottom: 25px;
`;

export const PlaceText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
`;

export const LocationMark = styled(Mark)`
  fill: ${C.CityTextGray};
  width: 20px;
  height: 20px;
`;

