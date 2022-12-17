import React, {useState} from 'react';
import {CargoDeliveryAction} from "definitions/ISaveGame";
import styled from "styled-components";
import I18n from "I18n";

interface Params {
  data: CargoDeliveryAction;
};

const CargoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const CargoType = styled.div`
  //padding: 5px;
`;

const CargoInput = styled.input`
  margin: 0 5px;
  width: 30px;
`;

const CargoState = ({data}: Params) => {
  const [curValue, setCurValue] = useState(data.cargoState.curValue);

  const onCurValueChange = (e) => {
    const value = e.target.value;
    if (/\d/.test(value) && value >= 0 && value <= data.cargoState.aimValue) {
      setCurValue(value);
      data.cargoState.curValue = Number(value);
    }
  };

  return (
    <CargoContainer>
      <CargoType><I18n name={data.cargoState.type}/></CargoType>
      <div>&nbsp;to&nbsp;<I18n name={data.zones[0]}/> (<I18n name={data.map}/>):</div>
      <CargoInput type="number" value={curValue} onChange={onCurValueChange}/>
      <div> of {data.cargoState.aimValue}</div>
    </CargoContainer>
  );
}

export default CargoState
