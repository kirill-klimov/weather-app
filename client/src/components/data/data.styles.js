import styled from 'styled-components';
import * as C from '../../style';

export const Container = styled.div`
  background-color: ${C.DarkBlue};
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const ContentWrap = styled.div`
  padding-top: 30px;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
  
  overflow-y: scroll;
`;