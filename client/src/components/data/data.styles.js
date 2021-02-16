import styled from 'styled-components';
import * as C from '../../style';

export const Container = styled.div`
  background-color: ${C.DarkBlue};
  flex-grow: 10;
  display: flex;
  justify-content: center;
  padding: 0 50px;
`;

export const ContentWrap = styled.div`
  padding: 30px 0;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;