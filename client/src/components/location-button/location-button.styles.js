import styled from 'styled-components';
import * as C from '../../style';
import {ReactComponent as Location} from '../../assets/my_location-24px.svg';

export const Button = styled.span`
  display: flex;
  padding: 10px;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,0.25);
  background-color: ${C.Gray};
  color: ${C.White};
  cursor: pointer;
  transition: all .1s;
  user-select: none;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #6e717aad;
  }

  &:active {
    background-color: #6e717a88;
  }
`;

export const LocationIcon = styled(Location)`
  fill: ${C.White};
`;