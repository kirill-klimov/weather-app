import styled from 'styled-components';
import { ReactComponent as Search } from '../../assets/search-24px.svg';
import * as C from '../../style';

export const Container = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const SearchIcon = styled(Search)`
  fill: ${C.InputGray};
  transition: all .1s;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${C.White};
  font-size: 1rem;
  width: 100%;

  &::placeholder {
    color: ${C.InputGray};
    font-size: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  column-gap: 5px;
  border: 1px solid ${ ({focus}) => focus ? C.White : C.InputGray };
  transition: all .1s;
  padding: 10px;
  flex-grow: 1;
  align-items: center;
  cursor: text;

  > svg {
    fill: ${ ({focus}) => focus ? C.White : C.InputGray };
  }

  &:hover {
    border-color: ${ ({focus}) => focus ? C.White : C.White + "aa" };
  }

  &:hover > svg {
    fill: ${ ({focus}) => focus ? C.White : C.White + "aa" };
  }
`;

export const Button = styled.span`
  background-color: ${C.ButtonBlue};
  color: ${C.White};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  transition: all .1s;
  user-select: none;

  &:hover {
    background-color: ${C.ButtonBlue + "dd"};
  }

  &:active {
    background-color: ${C.ButtonBlue + "aa"};
  }
`;