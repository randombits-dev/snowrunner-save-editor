import React, {useState} from 'react';
import {TruckDeliveryState} from "definitions/ISaveGame";
import I18n from "I18n";
import styled from "styled-components";

interface Params {
  delivery: TruckDeliveryState;
}

const CargoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const CargoType = styled.div`

`;

const CargoInput = styled.input`
  margin: 0 5px;
  width: 30px;
`;

const TruckDelivery = ({delivery}: Params) => {
  const [curValue, setCurValue] = useState<boolean>(delivery.isDelivered);

  const onCurValueChange = (e) => {
    const value = e.target.checked;
    setCurValue(value);
    delivery.isDelivered = value;
  };

  return (
    <CargoContainer>
      <CargoType><I18n name={delivery.truckId}/></CargoType>
      <div>&nbsp;to&nbsp;<I18n name={delivery.deliveryZones[0]}/> (<I18n name={delivery.mapDelivery}/>):</div>
      <CargoInput type="checkbox" checked={curValue} onChange={onCurValueChange}/>
    </CargoContainer>
  );
}

export default TruckDelivery
