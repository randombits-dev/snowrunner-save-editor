import React from 'react';
import {ObjectiveState} from "../definitions/ISaveGame";
import CargoState from "@/components/CargoState";
import I18n from "@/components/I18n";
import Card from "@/components/card/Card";
import CardTitle from "@/components/card/CardTitle";
import CardContent from "@/components/card/CardContent";
import TruckDelivery from "@/components/TruckDelivery";
import VisitZone from "@/components/VisitZone";

interface Params {
  objective: ObjectiveState;
}

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

const VisitZones = ({stage}) => {
  if (stage.visitAllZonesState) {
    return stage.visitAllZonesState.zoneStates.map((zoneState, index) => {
      return <VisitZone key={index} map={stage.visitAllZonesState.map} zoneState={zoneState}/>
    });
  }
};

const ObjectiveDetails = ({objective}: Params) => {
  const stage = objective.stagesState[0];

  return (
    <Card>
      <CardTitle><I18n name={objective.id}/></CardTitle>
      <CardContent>
        <CargoDeliveries stage={stage}/>
        <TruckDeliveries stage={stage}/>
        <VisitZones stage={stage}/>
      </CardContent>
    </Card>
  );
}

export default ObjectiveDetails
