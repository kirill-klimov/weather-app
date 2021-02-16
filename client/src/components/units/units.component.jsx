import React, { useState } from 'react';
import * as S from './units.styles';

const Units = () => {
  const [active, setActive] = useState(true);

  return (
    <S.Container>
      <S.Unit 
        onClick={() => setActive(!active)}
        active={active} >
        °C
      </S.Unit>

      <S.Unit 
        onClick={() => setActive(!active)}
        active={!active} >
        °F
      </S.Unit>
    </S.Container>
  );
}

export default Units;