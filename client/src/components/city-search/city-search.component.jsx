import React from 'react';
import * as S from './city-search.styles';
import { useAnimation } from 'framer-motion';
import SearchBar from '../search-bar/search-bar.component';

const CitySearch = ({setHidden}) => {
  const controls = useAnimation();

  const variants = {
    visible: {left: 0},
    hidden: {left: '-100%'}
  }

  const handleClose = async () => {
    await controls.start('hidden');
    setHidden(true);
  }

  controls.start('visible');

  return (
    <S.Container 
      initial={{left: '-100%'}} 
      animate={controls}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.25 }}>
      <S.CloseButtonContainer>
        <S.CloseButton onClick={() => handleClose()}>×</S.CloseButton>
      </S.CloseButtonContainer>

      <SearchBar />
      
    </S.Container>
  );
}

export default CitySearch;