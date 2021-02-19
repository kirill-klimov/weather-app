import React, { useState, useRef } from 'react';
import * as S from './search-bar.styles';
import { useDispatch } from 'react-redux';
import { queryDataStart } from '../../redux/weather/weather.actions';

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
    dispatch(queryDataStart(requestParams));
  }

  const inputRef = useRef(null);

  return (
    <S.Container>
      <S.InputContainer
        onClick={() => inputRef.current.focus()} 
        focus={valid} >
        <S.SearchIcon />
        <S.Input
          ref={inputRef}
          type="text"
          placeholder="Search location"
          onChange={handleChange}
          value={value}
          onKeyUp={e => e.key === "Enter" ? handleSubmit() : null}
          required
          autoFocus />
      </S.InputContainer>
      <S.Button onClick={handleSubmit}>Search</S.Button>
    </S.Container>
  );
}

export default SearchBar;