import React from 'react';
import {SaveGame} from "definitions/ISaveGame";
import {useI18n} from "providers/I18nProvider";
import ObjectiveDetails from "components/ObjectiveDetails";
import styled from "styled-components";

interface Params {
  region: string;
  data: SaveGame;
}

const SectionTitle = styled.div`
  margin: 10px 0 5px 5px;
  padding-bottom: 3px;
  border-bottom: 1px solid var(--text-1);
  font-size: var(--font-size-text);

`;

const NoAcceptedTasks = styled.div`
  margin-left: 10px;
  padding: 5px 10px;
`;

const MissionList = ({region, data}: Params) => {
  const {translate} = useI18n();
  const objectives = data.CompleteSave.SslValue.objectiveStates;
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
      {/*<h4>Notes:</h4>*/}
      {/*<ol>*/}
      {/*  <li>You must accept a contract/task in the game for it to show up in this list.</li>*/}
      {/*  <li>If you are using this to make a task easier (less deliveries), make the adjustment before you make the final delivery in the*/}
      {/*    game. Then you*/}
      {/*    will receive the money & XP reward.*/}
      {/*  </li>*/}
      {/*  <li>Completing a task using this tool will not give you money or XP reward. You can adjust the money/rank manually if you*/}
      {/*    wish.*/}
      {/*  </li>*/}
      {/*</ol>*/}
      {
        keys.length > 0 ?
          keys.map(key => <ObjectiveDetails key={key} objective={objectives[key]}/>)
          : <NoAcceptedTasks>No Accepted Tasks</NoAcceptedTasks>
      }
    </div>
  );

}

export default MissionList
