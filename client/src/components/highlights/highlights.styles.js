import styled from 'styled-components';
import * as C from '../../style';
import { ReactComponent as Navigation } from '../../assets/navigation-24px.svg';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;

export const Header = styled.h2`
  color: ${C.White};
  margin: 0;
`;

export const Row = styled.div`
  display: flex;
  column-gap: 50px;
  row-gap: 50px;
  flex-wrap: wrap;
`;

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

export const WindDataContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const WindText = styled.span`
  font-size: 0.9rem;
`;

export const Direction = styled(Navigation)`
  background-color: ${C.Gray};
  border-radius: 50%;
  padding: 5px;
  height: 20px;
  width: 20px;
  fill: ${C.White};
  box-sizing: content-box;
  transform: rotate(${ ({rotation}) => rotation + "deg" });
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 100%;
  max-width: 300px;
`;

export const ScaleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2px;
`;

export const ScaleLabel = styled.span`
  font-size: 0.9rem;
  color: ${C.InputGray};
  font-weight: bold;
`;

export const BarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${C.Gray};
  border-radius: 4px;
  position: relative;
`;

export const BarFill = styled.div`
  width: ${ ({fill}) => fill + "%" };
  height: 8px;
  border-radius: 4px;
  left: 0;
  background-color: ${C.Yellow};
`;

export const ScaleUnit = styled.span`
  font-size: 0.9rem;
  color: ${C.InputGray};
  font-weight: bold;
  align-self: flex-end;
`;

