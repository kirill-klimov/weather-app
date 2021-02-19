import styled from 'styled-components';
import * as C from '../../style';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-right: 1px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${C.InputGray};
  }
`;

export const Element = styled(motion.div)`
  color: ${C.White};
  padding: 20px 10px;
  transition: all .1s;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0 0 0 1px ${C.InputGray} inset;
    outline: red;
  }

  &:hover::after {
    opacity: 1;
  }

  &::after {
    content: '›';
    opacity: 0;
    font-size: 2rem;
    color: ${C.InputGray};
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-60%);
  }
`;