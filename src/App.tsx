import FileLoader from "FileLoader";
import {SaveGame} from "definitions/ISaveGame";
import React, {useState} from "react";
import SaveFile from "SaveFile";
import styled from "styled-components";
import AccordionItem from "accordion/AccordionItem";
import Instructions from "Instructions";
import {REGIONS} from "definitions/levels";
import Upgrades from "Upgrades";
import MissionList from "MissionList";
import Accordion from "accordion/Accordion";
import {useI18n} from "providers/I18nProvider";
import ProfileFields from "ProfileFields";

const FileContainer = styled.div`
  padding: 10px 0;
  width: 1000px;
`;

const App = () => {
  const {translate} = useI18n();
  const [data, setData] = useState<SaveGame>(null);

  const renderFileData = () => {
    if (data) {
      // const profileData = data.CompleteSave.SslValue.persistentProfileData;
      return <Accordion onlyOneOpen={true} initialOpen={['PROFILE']}>
        <AccordionItem id="PROFILE" title="Profile Data">
          <ProfileFields profileData={data.CompleteSave.SslValue.persistentProfileData}/>
        </AccordionItem>
        {

          REGIONS.map(region => {
            return <AccordionItem title={translate(region.id)} id={region.id}>
              <Upgrades region={region} data={data.CompleteSave.SslValue}/>
              <MissionList region={region.id} data={data}/>
            </AccordionItem>
          })
        }
      </Accordion>;
    }
  };

  return (
    <>
      <Instructions hasData={!!data}></Instructions>
      <FileContainer>
        {
          data ? <SaveFile data={data}></SaveFile> : <FileLoader onData={setData}></FileLoader>
        }
      </FileContainer>
      {renderFileData()}
    </>
  );
}

export default App
