import styled from 'styled-components';
import * as C from '../../style';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  text-align: center;
  background-color: ${C.Card};
  padding: 20px;
  flex-grow: 1;
  max-width: calc(50% - 7.5px);

  @media screen and (max-width: 500px) {
    padding: 15px 10px;
  }
`;

export const DayText = styled.span`
  color: ${C.White};
  font-size: 1.25rem;

  @media screen and (max-width: 500px) {
    font-size: 1rem; 
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 20px;
`;

export const Image = styled.img`
  height: 70px;
  width: auto;

  @media screen and (max-width: 500px) {
    height: 55px;
  }
`;

export const TemperatureTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TemperatureText = styled.span`
  font-size: 1.1rem;

  &:first-of-type {
    color: ${C.White};
  }

  &:last-of-type {
    color: ${C.UnitInactive};
  }

  @media screen and (max-width: 500px) {
    font-size: 0.9rem; 
  }
`;