import React, {useState} from 'react';
import {ZoneState} from "../definitions/ISaveGame";
import I18n from "@/components/I18n";
import styled from "styled-components";

interface Params {
  map: string;
  zoneState: ZoneState;
}

const VisitContainer = styled.div`
  padding: 5px;
`;

const CompletedCheckbox = styled.input`
  margin: 0 5px;
  width: 30px;
`;

const VisitZone = ({map, zoneState}: Params) => {
  const [curValue, setCurValue] = useState<boolean>(zoneState.isVisited);

  const onCurValueChange = (e) => {
    const value = e.target.checked;
    setCurValue(value);
    zoneState.isVisited = value;
  };

  return (
    <VisitContainer>
      Visit: <I18n name={zoneState.zone}/> (<I18n name={map}/>)
      <CompletedCheckbox type="checkbox" checked={curValue} onChange={onCurValueChange}/>
    </VisitContainer>
  );
}

export default VisitZone
