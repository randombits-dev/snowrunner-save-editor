import React from 'react';
import {SaveGame} from "definitions/ISaveGame";
import {useI18n} from "providers/I18nProvider";
import ObjectiveDetails from "components/ObjectiveDetails";
import styled from "styled-components";
import {SectionTitle} from "./SectionTitle";
import {Store} from "../providers/store";

interface Params {
  region: string;
  data: SaveGame;
}

const NoAcceptedTasks = styled.div`
  margin-left: 10px;
  padding: 5px 10px;
`;

const MissionList = ({region, data}: Params) => {
  const {translate} = useI18n();
  const objectives = data[Store.saveKey].SslValue.objectiveStates;
  const keys = Object.keys(objectives).filter(key => key.substring(0, 5).toUpperCase() === region);
  // const missions = Object.values(data.CompleteSave.SslValue.objectiveStates);
  keys.sort((a, b) => {
    const idA = translate(a);
    const idB = translate(b);
    return (idA < idB) ? -1 : 1;
  });

  return (
    <div>
      <SectionTitle>Tasks</SectionTitle>
      {
        keys.length > 0 ?
          keys.map(key => <ObjectiveDetails key={key} objective={objectives[key]}/>)
          : <NoAcceptedTasks>No Accepted Tasks</NoAcceptedTasks>
      }
    </div>
  );

}

export default MissionList
