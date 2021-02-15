import styled from 'styled-components';
import { ReactComponent as Search } from '../../assets/search-24px.svg';
import * as C from '../../style';

export const Container = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const SearchIcon = styled(Search)`
  fill: ${C.InputGray};
`;