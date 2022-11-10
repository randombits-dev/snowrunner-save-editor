import React from 'react';
import {SaveGame} from "../definitions/ISaveGame";
import {useI18n} from "@/providers/I18nProvider";
import ObjectiveDetails from "@/components/ObjectiveDetails";

interface Params {
  data: SaveGame;
}

const MissionList = ({data}: Params) => {
  const {translate} = useI18n();
  const missions = Object.values(data.CompleteSave.SslValue.objectiveStates);
  missions.sort((missionA, missionB) => {
    const idA = translate(missionA.id);
    const idB = translate(missionB.id);
    return (idA < idB) ? -1 : 1;
  });
  return (
    <>
      <h2>Contracts / Tasks</h2>
      <h4>Notes:</h4>
      <ol>
        <li>You must accept a contract/task in the game for it to show up in this list.</li>
        <li>If you are using this to make a task easier (less deliveries), make the adjustment before you make the final delivery in the
          game. Then you
          will receive the money & XP reward.
        </li>
        <li>Completing a task using this tool will not give you money or XP reward. You can adjust the money/rank manually if you
          wish.
        </li>
      </ol>
      {
        missions.map(objective => <ObjectiveDetails key={objective.id} objective={objective}/>)
      }
    </>
  );
}

export default MissionList
