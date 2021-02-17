import React from 'react';
import * as S from './units.styles';
import { UnitTypes } from '../../redux/weather/weather.types';
import { setUnit } from '../../redux/weather/weather.actions';
import { useDispatch, connect } from 'react-redux';

const Units = ({ activeUnitType }) => {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Unit 
        onClick={() => dispatch(setUnit(UnitTypes.Celsius))}
        active={activeUnitType === UnitTypes.Celsius} >
        °C
      </S.Unit>

      <S.Unit 
        onClick={() => dispatch(setUnit(UnitTypes.Fahrenheit))}
        active={activeUnitType === UnitTypes.Fahrenheit} >
        °F
      </S.Unit>
    </S.Container>
  );
}

const mapStateToProps = state => ({
  activeUnitType: state.weather.unit
})

export default connect(mapStateToProps)(Units);