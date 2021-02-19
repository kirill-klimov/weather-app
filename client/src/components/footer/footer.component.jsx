import React from 'react';
import styled from 'styled-components';
import * as C from '../../style';

export const Container = styled.div`
  display: flex;
  justify-content: center; 
`;

export const Text = styled.div`
  color: ${C.Gray};
`;

const Footer = () => {
  return (
    <Container>
      <Text>Kirill Klimov - devchallanges.io</Text>
    </Container>
  )
}

export default Footer;