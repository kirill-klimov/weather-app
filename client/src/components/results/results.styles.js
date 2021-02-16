import styled from 'styled-components';
import * as C from '../../style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Element = styled.div`
  color: ${C.White};
  padding: 20px 10px;
  transition: all .1s;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0 0 0 1px ${C.InputGray};
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