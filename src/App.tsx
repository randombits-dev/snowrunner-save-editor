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

const FileContainer = styled.div`
  padding: 10px 0;
  width: 1000px;
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
  display: inline-block;
`;

const Card = styled('div')`
  overflow: hidden;
`;

const Image = styled.img`
  //height: 100%;
  max-width: 300px;
  object-fit: cover;
  border-left: var(--border-width) solid var(--border-color);
  border-bottom: var(--border-width) solid var(--border-color);
  float: right;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const DataContainer = styled('div')`
    clear: right;
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
    <Card className="card">
        <HeaderText>Snowrunner Save Editor</HeaderText>
        <Image src="/images/snowrunner.jpg"/>
        <div className="card-contents">
          <Instructions hasData={!!data}/>
          <FileContainer>
            {
              data ? <SaveFile data={data}></SaveFile> : <FileLoader onData={setData}></FileLoader>
            }
          </FileContainer>
          <DataContainer>

          </DataContainer>
        </div>
    </Card>
        {renderFileData()}
    </>
  );
}

export default App
