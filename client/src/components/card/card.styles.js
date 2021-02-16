import styled from 'styled-components';
import * as C from '../../style';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  text-align: center;
  background-color: ${C.Card};
  padding: 20px;
`;

export const DayText = styled.span`
  color: ${C.White};
  font-size: 1.25rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 20px;
`;

export const Image = styled.img`
  height: 70px;
  width: auto;
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
`;