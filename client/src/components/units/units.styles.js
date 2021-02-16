import styled from 'styled-components';
import * as C from '../../style';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`;

export const Unit = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${ ({active}) => active ? C.DarkBlue : C.White };
  background-color: ${ ({active}) => active ? C.White : C.UnitInactive };
  font-weight: bold;
  font-size: 1.25rem;
  width: 2.5rem;
  height: 2.5rem;
  user-select: none;
  cursor: pointer;
  transition: all .1s;

  &:hover {
    background-color: ${ ({active}) => (active ? C.White : C.UnitInactive) + "dd" };
  }

  &:active {
    background-color: ${ ({active}) => (active ? C.White : C.UnitInactive) + "aa" };
  }
`;