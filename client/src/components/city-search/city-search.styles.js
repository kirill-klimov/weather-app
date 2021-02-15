import styled from 'styled-components';
import * as C from '../../style';
import { motion } from "framer-motion"

export const Container = styled(motion.div)`
  padding: 30px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  row-gap: 50px;
  background-color: ${C.LightBlueGray};
`;

export const CloseButtonContainer = styled.div`
  width: 100%;
  text-align: right;
`;

export const CloseButton = styled.span`
  user-select: none;
  font-size: 2rem;
  color: ${C.White};
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  padding: 0 14px 7px;
  
  &:hover {
    background-color: ${C.Gray + '55'};
  }
`;