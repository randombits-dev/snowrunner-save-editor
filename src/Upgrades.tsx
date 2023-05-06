import React, {useState} from 'react';
import {SaveGameValue} from "definitions/ISaveGame";
import I18n from "I18n";
import styled from "styled-components";
import {IRegion} from "definitions/levels";

interface Params {
  region: IRegion;
  data: SaveGameValue;
}

const SectionTitle = styled.div`
  margin: 0 0 5px 5px;
  padding-bottom: 3px;
  border-bottom: 1px solid var(--text-1);
  font-size: var(--font-size-text);
`;

const UpgradeRow = styled.div`
  margin-left: 10px;
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
  padding: 0 2px;
`;

const Button = styled.div`
  cursor: pointer;
  text-decoration: underline;
  padding: 5px 10px;
  width: 100%;
`

const Upgrades = ({region, data}: Params) => {
  const [upgradeData, setUpgradeData] = useState(data.upgradesGiverData);

  const MapUpgrades = ({map}) => {
    const upgradeMap = upgradeData[map];
    if (!upgradeMap) {
      return <></>;
    }
    const upgrades = Object.values(upgradeMap);
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
        {unknown > 0 ? <Button onClick={discoverAll}>Discover All</Button> : <></>}
      </ButtonContainer>
      <ButtonContainer>
        {unknown > 0 || discovered > 0 ? <Button onClick={obtainAll}>Obtain All</Button> : <></>}
      </ButtonContainer>
      <ButtonContainer>
        {found > 0 || discovered > 0 ? <Button onClick={resetAll}>Reset All</Button> : <></>}
      </ButtonContainer>
    </UpgradeRow>;
  };

  return <div>

    <SectionTitle>Upgrades</SectionTitle>

    {
      region.levels.map(map => <MapUpgrades map={'level_' + map.toLowerCase()}/>)
    }
  </div>
}

export default Upgrades
