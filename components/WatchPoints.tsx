import React, {useState} from 'react';
import {WatchPointsData} from "../definitions/ISaveGame";
import I18n from "@/components/I18n";
import AccordionItem from "@/components/accordion/AccordionItem";
import styled from "styled-components";

interface Params {
  data: WatchPointsData;
}

const WatchPointRow = styled.div`
  display: flex;
  align-items: center;
`;

const WatchPointName = styled.div`
  width: 200px;
  padding: 5px;
`;

const WatchPointStatus = styled.div`
  width: 200px;
`;

const WatchPointAction = styled.div`
  width: 100px;
`;

const WatchPoints = ({data}: Params) => {
  const [mapData, setMapData] = useState(data.data);

  const mapList = Object.keys(mapData);

  const MapWatchPoints = ({map}) => {
    const pointMap = mapData[map];
    const pointNames = Object.values(mapData[map]);
    let discovered = 0;
    let total = 0;
    pointNames.forEach(upgrade => {
      if (upgrade) {
        discovered++;
      }
      total++;
    });

    const discoverAll = () => {
      const keys = Object.keys(mapData[map]);
      keys.forEach(key => {
        pointMap[key] = true;
      });
      setMapData({...mapData});
    };

    const resetAll = () => {
      const keys = Object.keys(mapData[map]);
      keys.forEach(key => {
        pointMap[key] = false;
      });
      setMapData({...mapData});
    };

    return <WatchPointRow>
      <WatchPointName><I18n name={map}/></WatchPointName>
      <WatchPointStatus>{discovered} out of {total} discovered</WatchPointStatus>
      <WatchPointAction>{discovered < total ? <button onClick={discoverAll}>Discover All</button> : <></>}</WatchPointAction>
      <WatchPointAction>{discovered > 0 ? <button onClick={resetAll}>Reset All</button> : <></>}</WatchPointAction>
    </WatchPointRow>
  };

  return (
    <AccordionItem title="WatchPoints">
      {
        mapList.map(map => <MapWatchPoints key={map} map={map}/>)
      }
    </AccordionItem>
  );
}

export default WatchPoints
