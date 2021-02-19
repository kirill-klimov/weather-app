import React, { useEffect } from 'react';
import * as S from './city-search.styles';
import { useAnimation } from 'framer-motion';
import SearchBar from '../search-bar/search-bar.component';
import Results from '../results/results.component';
import { useDispatch } from 'react-redux';
import { setSearchMenu } from '../../redux/ui/ui.actions';

const variants = {
  visible: {left: 0},
  hidden: {left: '-100%'}
}

const handleClose = async (controls, dispatch) => {
  await controls.start('hidden');
  dispatch(setSearchMenu(false));
}

const CitySearch = () => {
  const dispatch = useDispatch();
  const controls = useAnimation();

  useEffect(() => {
    window.addEventListener('keyup', e => e.key === 'Escape' ? handleClose(controls, dispatch) : null)
  }, [controls, dispatch]);

  controls.start('visible');

  return (
    <S.Container 
      initial={{left: '-100%'}} 
      animate={controls}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.25 }}>

      <S.CloseButtonContainer>
        <S.CloseButton onClick={() => handleClose(controls, dispatch)}>×</S.CloseButton>
      </S.CloseButtonContainer>

      <SearchBar />

      <Results menuControls={controls} />
      
    </S.Container>
  );
}

export default CitySearch;