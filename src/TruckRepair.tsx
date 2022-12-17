import React, {useState} from 'react';
import {TruckRepairState} from "definitions/ISaveGame";
import I18n from "I18n";
import styled from "styled-components";

interface Params {
  repair: TruckRepairState;
}

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

const TruckRepair = ({repair}: Params) => {
  const [isRefueled, setIsRefueled] = useState<boolean>(repair.isRefueled);
  const [isRepaired, setIsRepaired] = useState<boolean>(repair.isRepaired);

  const onIsRefueledChange = (e) => {
    const value = e.target.checked;
    setIsRefueled(value);
    repair.isRefueled = value;
  };

  const onIsRepairedChange = (e) => {
    const value = e.target.checked;
    setIsRepaired(value);
    repair.isRepaired = value;
  };

  return (
    <CargoContainer>
      <CargoType><I18n name={repair.truckId}/></CargoType>:
      Refueled: <CargoInput type="checkbox" checked={isRefueled} onChange={onIsRefueledChange}/>
      Repaired: <CargoInput type="checkbox" checked={isRepaired} onChange={onIsRepairedChange}/>
    </CargoContainer>
  );
}

export default TruckRepair
