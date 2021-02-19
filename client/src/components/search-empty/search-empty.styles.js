import styled from 'styled-components';
import { motion } from "framer-motion";
import * as C from '../../style';

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

export const Text = styled.span`
  color: ${C.InputGray};
`;