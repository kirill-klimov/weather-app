import styled from 'styled-components';
import * as C from '../../style';

export const Container = styled.div`
  flex-basis: 375px;
  flex-grow: 1;
  background-color: ${C.LightBlueGray};
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  overflow: hidden;
  position: sticky;
  top: 0;

  @media screen and (max-width: 1232px) {
    position: relative;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchButton = styled.span`
  display: inline-block;
  padding: 11px 15px;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,0.25);
  background-color: ${C.Gray};
  color: ${C.White};
  cursor: pointer;
  transition: all .1s;
  user-select: none;

  &:hover {
    background-color: #6e717aad;
  }

  &:active {
    background-color: #6e717a88;
  }
`;