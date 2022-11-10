import React from 'react';
import {SaveGameValue} from "../definitions/ISaveGame";
import I18n from "@/components/I18n";
import styled from "styled-components";
import Accordion from "@/components/Accordion";

interface Params {
  data: SaveGameValue;
}

const RegionName = styled.div`
  font-weight: bold;
`;

const Upgrades = ({data}: Params) => {
  const maps = Object.keys(data.upgradesGiverData);
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
  regionNames.sort();

  const MapUpgrades = ({map}) => {
    const upgradeMap = data.upgradesGiverData[map];
    const upgrades = Object.values(data.upgradesGiverData[map]);
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
      const upgradeKeys = Object.keys(data.upgradesGiverData[map]);
      upgradeKeys.forEach(key => {
        if (upgradeMap[key] < 1) {
          upgradeMap[key] = 1;
        }
      });
    };

    const obtainAll = () => {
      const upgradeKeys = Object.keys(data.upgradesGiverData[map]);
      upgradeKeys.forEach(key => {
        upgradeMap[key] = 2;
      });
    };

    return <div>
      <I18n name={map}/>
      <div>Unknown: {unknown}, Discovered: {discovered}, Obtained: {found}</div>
      <button onClick={discoverAll}>Discover All</button>
      <button onClick={obtainAll}>Obtain All</button>
    </div>;
  };

  return <Accordion title="Upgrades">
    {
      regionNames.map(region => {
        return <div>
          <RegionName><I18n name={region}/></RegionName>
          {
            regions.get(region).map(map => <MapUpgrades map={map}/>)
          }
        </div>
      })
    }
  </Accordion>
}

export default Upgrades
