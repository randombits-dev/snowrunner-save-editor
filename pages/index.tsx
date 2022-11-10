import Layout from '../components/Layout';
import FileLoader from "@/components/FileLoader";
import {SaveGame} from "../definitions/ISaveGame";
import {useState} from "react";
import SaveFile from "@/components/SaveFile";
import ProfileFields from "@/components/ProfileFields";
import MissionList from "@/components/MissionList";
import Instructions from "@/components/Instructions";
import Upgrades from "@/components/Upgrades";


const IndexPage = () => {
  const [data, setData] = useState<SaveGame>(null);

  const renderData = () => {
    if (data) {
      const profileData = data.CompleteSave.SslValue.persistentProfileData;
      return <div>
        <ProfileFields profileData={profileData}/>
        <MissionList data={data}/>
        <Upgrades data={data.CompleteSave.SslValue}/>
      </div>;
    }
  };

  return (<Layout>
    <Instructions></Instructions>
    <FileLoader onData={setData}></FileLoader>
    {
      data ? <SaveFile data={data}></SaveFile> : <></>
    }
    {renderData()}
  </Layout>);
}

export default IndexPage
