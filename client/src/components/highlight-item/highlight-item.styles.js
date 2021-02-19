import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as C from '../../style';

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  background-color: ${C.Card};
  flex-grow: 1;
  flex-basis: 300px;
  align-items: center;
  color: ${C.White};
  padding: 20px;
`;

export const Title = styled.span`
  font-size: 1rem;
`;

export const DataContainer = styled.div`
  display: flex;
  column-gap: 3px;
  align-items: center;
`;

export const DataText = styled.span`
  font-size: 3rem;
`;

export const DataUnit = styled.span`
  font-size: 1.5rem;
`;