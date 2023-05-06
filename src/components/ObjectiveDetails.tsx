import React from 'react';
import {ObjectiveState} from "definitions/ISaveGame";
import CargoState from "components/CargoState";
import I18n from "components/I18n";
import TruckDelivery from "components/TruckDelivery";
import VisitZone from "components/VisitZone";
import styled from "styled-components";
import TruckRepair from "components/TruckRepair";

interface Params {
  objective: ObjectiveState;
}

const ObjectiveContainer = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--text-1);
`;

const ObjectiveName = styled.div`
  width: 200px;
  padding: 5px;
`;

const ObjectiveTasks = styled.div`
  //padding: 5px;
`;

const ObjectiveStageNum = styled.div`
  padding: 5px;
`;

const CargoDeliveries = ({stage}) => {
  if (stage.cargoDeliveryActions) {
    return stage.cargoDeliveryActions.map((cargo, index) => {
      return <CargoState key={index} data={cargo}></CargoState>
    });
  }
};

const TruckDeliveries = ({stage}) => {
  if (stage.truckDeliveryStates) {
    return stage.truckDeliveryStates.map((delivery, index) => {
      return <TruckDelivery key={index} delivery={delivery}/>
    });
  }
};

const TruckRepairs = ({stage}) => {
  if (stage.truckRepairStates) {
    return stage.truckRepairStates.map((repair, index) => {
      return <TruckRepair key={index} repair={repair}/>
    });
  }
};

const VisitZones = ({stage}) => {
  if (stage.visitAllZonesState) {
    return stage.visitAllZonesState.zoneStates.map((zoneState, index) => {
      return <VisitZone key={index} map={stage.visitAllZonesState.map} zoneState={zoneState}/>
    });
  }
};

const ObjectiveDetails = ({objective}: Params) => {
  return (
    <ObjectiveContainer>
      <ObjectiveName><I18n name={objective.id}/></ObjectiveName>
      <ObjectiveTasks>
        {
          objective.stagesState.map((stage, index) =>
            <>
              {
                objective.stagesState.length > 1 ? <ObjectiveStageNum>Stage {index + 1}:</ObjectiveStageNum> : <></>
              }
              <CargoDeliveries stage={stage}/>
              <TruckDeliveries stage={stage}/>
              <TruckRepairs stage={stage}/>
              <VisitZones stage={stage}/>
            </>
          )
        }
      </ObjectiveTasks>
    </ObjectiveContainer>
  );
}

export default ObjectiveDetails
