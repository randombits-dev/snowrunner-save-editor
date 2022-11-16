import Layout from '../components/Layout';
import FileLoader from "@/components/FileLoader";
import {SaveGame} from "../definitions/ISaveGame";
import {useState} from "react";
import SaveFile from "@/components/SaveFile";
import styled from "styled-components";
import AccordionItem from "@/components/accordion/AccordionItem";
import Instructions from "@/components/Instructions";
import {REGIONS} from "../definitions/levels";
import Upgrades from "@/components/Upgrades";
import MissionList from "@/components/MissionList";
import Accordion from "@/components/accordion/Accordion";
import {useI18n} from "@/providers/I18nProvider";
import ProfileFields from "@/components/ProfileFields";

const FileContainer = styled.div`
  padding: 10px 0;
`;

const IndexPage = () => {
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

  return (<Layout>
    <Instructions></Instructions>
    <FileContainer>
      <FileLoader onData={setData}></FileLoader>
      {
        data ? <SaveFile data={data}></SaveFile> : <></>
      }
    </FileContainer>
    {renderFileData()}
  </Layout>);
}

export default IndexPage
