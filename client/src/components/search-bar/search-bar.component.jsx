import React, { useState } from 'react';
import * as S from './search-bar.styles';
import { useDispatch } from 'react-redux';
import { fetchDataStart } from '../../redux/weather/weather.actions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const handleChange = e => {
    setValue(e.target.value);
    setValid(e.target.validity.valid);
  }

  const handleSubmit = () => {
    if (value.trim().length < 2) return;
    const requestParams = {
      location: value.trim()
    }
    dispatch(fetchDataStart(requestParams));
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
          onKeyUp={e => e.key === "Enter" ? handleSubmit() : null}
          required />
      </S.InputContainer>
      <S.Button onClick={handleSubmit}>Search</S.Button>
    </S.Container>
  );
}

export default SearchBar;