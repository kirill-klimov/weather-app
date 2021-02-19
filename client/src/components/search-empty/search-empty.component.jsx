import React, { useEffect } from 'react';
import * as S from './search-empty.styles';

import { useAnimation } from 'framer-motion';

const SearchEmpty = () => {
  const controls = useAnimation();

  const variants = {
    initial: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  }

  useEffect(() => {
    controls.start('visible');
  })

  return (
    <S.Container
      initial={"initial"}
      animate={controls}
      variants={variants}>
      <S.Text>Such city not found 🙄</S.Text>
    </S.Container>
  )
}

export default SearchEmpty;