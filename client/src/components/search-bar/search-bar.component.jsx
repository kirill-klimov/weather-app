import React, { useState } from 'react';
import * as S from './search-bar.styles';

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const handleChange = e => {
    setValue(e.target.value);
    setValid(e.target.validity.valid);
  }

  return (
    <S.Container>
      <S.InputContainer focus={valid}>
        <S.SearchIcon />
        <S.Input
          type="text"
          placeholder="Search location"
          onChange={handleChange}
          value={value}
          required />
      </S.InputContainer>
      <S.Button>Search</S.Button>
    </S.Container>
  );
}

export default SearchBar;