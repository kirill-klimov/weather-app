import React, { useEffect } from 'react';
import * as S from './results.styles';
import { connect, useDispatch } from 'react-redux';
import { fetchDataStart } from '../../redux/weather/weather.actions';
import { useAnimation } from 'framer-motion';
import { setSearchMenu } from '../../redux/ui/ui.actions';
import SearchEmpty from '../search-empty/search-empty.component';

const Results = ({ query, menuControls }) => {
  const dispatch = useDispatch();

  const handleClick = async (woeid) => {
    const requestParams = {
      woeid
    }
    dispatch(fetchDataStart(requestParams));
    await menuControls.start('hidden');
    dispatch(setSearchMenu(false));
  }

  const controls = useAnimation();

  const variants = {
    visible: (custom) => ({
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: custom * 0.02,
      }
    })
  }

  useEffect(() => {
    controls.start("visible");
  })

  return (
    <S.Container>
      {
        query.length === 0 ? <SearchEmpty /> :
        query.map((item, i) => (
          <S.Element
            key={item.woeid}
            custom={i}
            variants={variants}
            initial={{opacity: 0}}
            animate={controls}
            onClick={() => handleClick(item.woeid)}>
            {item.title}
          </S.Element>
        ))
      }
    </S.Container>
  );
}

const mapStateToProps = state => ({
  query: state.weather.query
})

export default connect(mapStateToProps)(Results);