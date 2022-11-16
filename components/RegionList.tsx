import React from 'react';
import {SaveGame} from "../definitions/ISaveGame";
import {REGIONS} from "../definitions/levels";
import MissionList from "@/components/MissionList";
import AccordionItem from "@/components/accordion/AccordionItem";
import {useI18n} from "@/providers/I18nProvider";
import Upgrades from "@/components/Upgrades";
import Accordion from "@/components/accordion/Accordion";
import ProfileFields from "@/components/ProfileFields";
import Instructions from "@/components/Instructions";

interface Params {
  data: SaveGame;
}

const RegionList = ({data}: Params) => {
  const {translate} = useI18n();
  // const [expanded, setExpanded] = useState(null);

  return (
    <Accordion onlyOneOpen={true} initialOpen={['PROFILE']}>
      <AccordionItem id="INST" title="Instructions">
        <Instructions></Instructions>
      </AccordionItem>
      <AccordionItem id="PROFILE" title="Profile Data">
        <ProfileFields profileData={data.CompleteSave.SslValue.persistentProfileData}/>
      </AccordionItem>
      {
        REGIONS.map(region => {
          return <AccordionItem title={translate(region.id)} id={region.id}>
            <Upgrades region={region} data={data.CompleteSave.SslValue}/>
            <MissionList region={region.id} data={data}/>
            {/*{*/}
            {/*  region.levels.map(level => {*/}
            {/*    return <div><h3><I18n name={'level_' + level}/></h3>*/}
            {/*      <MissionList level={level} data={data}/>*/}
            {/*    </div>*/}
            {/*  })*/}
            {/*}*/}
          </AccordionItem>
        })
      }
    </Accordion>
  );
}

export default RegionList
