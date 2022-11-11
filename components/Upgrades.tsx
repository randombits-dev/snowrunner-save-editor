import React, {useState} from 'react';
import {SaveGameValue} from "../definitions/ISaveGame";
import I18n from "@/components/I18n";
import styled from "styled-components";
import Accordion from "@/components/Accordion";
import {useI18n} from "@/providers/I18nProvider";

interface Params {
  data: SaveGameValue;
}

const UpgradeRow = styled.div`
  display: flex;
  align-items: center;
`;

const MapName = styled.div`
  width: 200px;
  padding: 5px 10px;
`;

const Status = styled.div`
  width: 300px;
  padding: 5px 10px;
`;

const ButtonContainer = styled.div`
  width: 100px;
`;

const RegionName = styled.div`
  display: flex;
  font-weight: bold;
  padding: 5px;
`;

const Upgrades = ({data}: Params) => {
  const {translate} = useI18n();
  const [upgradeData, setUpgradeData] = useState(data.upgradesGiverData);

  const maps = Object.keys(upgradeData);
  const regionNames = [];
  const regions = new Map<string, string[]>();
  maps.forEach(map => {
    const region = map.substring(6, 11).toUpperCase();
    if (region !== 'ONE_C') {
      let regionMaps = regions.get(region);
      if (!regionMaps) {
        regionNames.push(region);
        regionMaps = [];
        regions.set(region, regionMaps);
      }
      regionMaps.push(map);
    }
  });

  regionNames.sort((a, b) => {
    const idA = translate(a);
    const idB = translate(b);
    return (idA < idB) ? -1 : 1;
  });

  const MapUpgrades = ({map}) => {
    const upgradeMap = upgradeData[map];
    const upgrades = Object.values(upgradeData[map]);
    let unknown = 0;
    let discovered = 0;
    let found = 0;
    upgrades.forEach(upgrade => {
      if (upgrade === 1) {
        discovered++;
      } else if (upgrade === 2) {
        found++;
      } else {
        unknown++;
      }
    });

    const discoverAll = () => {
      const upgradeKeys = Object.keys(upgradeData[map]);
      upgradeKeys.forEach(key => {
        if (upgradeMap[key] < 1) {
          upgradeMap[key] = 1;
        }
      });
      setUpgradeData({...upgradeData});
    };

    const obtainAll = () => {
      const upgradeKeys = Object.keys(upgradeData[map]);
      upgradeKeys.forEach(key => {
        upgradeMap[key] = 2;
      });
      setUpgradeData({...upgradeData});
    };

    const resetAll = () => {
      const upgradeKeys = Object.keys(upgradeData[map]);
      upgradeKeys.forEach(key => {
        upgradeMap[key] = 0;
      });
      setUpgradeData({...upgradeData});
    };

    return <UpgradeRow>
      <MapName><I18n name={map}/></MapName>
      <Status>{unknown} Unknown, {discovered} Discovered, {found} Obtained</Status>
      <ButtonContainer>
        {unknown > 0 ? <button onClick={discoverAll}>Discover All</button> : <></>}
      </ButtonContainer>
      <ButtonContainer>
        {unknown > 0 || discovered > 0 ? <button onClick={obtainAll}>Obtain All</button> : <></>}
      </ButtonContainer>
      <ButtonContainer>
        {found > 0 || discovered > 0 ? <button onClick={resetAll}>Reset All</button> : <></>}
      </ButtonContainer>
    </UpgradeRow>;
  };

  return <Accordion title="Upgrades">
    {
      regionNames.map(region => {
        return <>
          <RegionName><I18n name={region}/></RegionName>
          {
            regions.get(region).map(map => <MapUpgrades map={map}/>)
          }
        </>
      })
    }
  </Accordion>
}

export default Upgrades
