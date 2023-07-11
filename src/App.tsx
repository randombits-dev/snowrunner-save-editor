import FileLoader from "components/FileLoader";
import {SaveGame} from "definitions/ISaveGame";
import React, {useState} from "react";
import SaveFile from "components/SaveFile";
import styled from "styled-components";
import AccordionItem from "components/accordion/AccordionItem";
import {REGIONS} from "definitions/levels";
import Upgrades from "components/Upgrades";
import MissionList from "components/MissionList";
import Accordion from "components/accordion/Accordion";
import {useI18n} from "providers/I18nProvider";
import ProfileFields from "components/ProfileFields";
import Instructions2 from "./instructions2.mdx";
import Instructions1 from "./instructions1.mdx";
import './index.scss';

const MainContainer = styled('div')`
    max-width: 1200px;
  margin: 0 auto;
`;

const FileContainer = styled.div`
  padding: 10px 0;
`;

const Instructions = ({hasData}: Params) => {
  if (hasData) {
    return <Instructions2/>
  } else {
    return <Instructions1/>
  }
};

const HeaderText = styled.h1`
  padding-left: 25px;
  flex: 1 1 auto;
  text-align: center;
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
    <MainContainer>
    <div className="card">
        <HeaderText>Snowrunner Save Editor</HeaderText>
        {/*<Image src="/images/snowrunner.jpg"/>*/}
        <div className="card-contents">
          <Instructions hasData={!!data}/>
          <FileContainer>
            {
              data ? <SaveFile data={data}></SaveFile> : <FileLoader onData={setData}></FileLoader>
            }
          </FileContainer>
        </div>
    </div>
        {renderFileData()}
    </MainContainer>
  );
}

export default App
