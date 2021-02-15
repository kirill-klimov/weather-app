import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 40vh;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  position: absolute;
  width: auto;

  &.img1 {
    height: 100px;
    top: 0;
    left: -60px;
  }
  &.img2 {
    height: 120px;
    top: 25px;
    right: -120px;
  }
  &.img3 {
    height: 85px;
    bottom: 0;
    left: -60px;
  }
  &.img4 {
    height: 70px;
    bottom: -25px;
    right: -30px;
  }
`;

export const CenterImage = styled.img`
  z-index: 1;
  height: 25vh;
  width: auto;
`; 