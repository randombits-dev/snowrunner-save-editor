export interface IRegion {
  id: string;
  name: string;
  levels: string[];
}

export const REGIONS: IRegion[] = [
  {
    id: 'US_01',
    name: 'Michigan',
    levels: ['US_01_01', 'US_01_02', 'US_01_03', 'US_01_04_NEW']
  },
  {
    id: 'US_02',
    name: 'Alaska',
    levels: ['US_02_01', 'US_02_02_NEW', 'US_02_03_NEW', 'US_02_04_NEW']
  },
  {
    id: 'RU_02',
    name: 'Taymyr',
    levels: ['RU_02_01_CROP', 'RU_02_02', 'RU_02_03', 'RU_02_04']
  },
  {
    id: 'RU_03',
    name: 'Kola Peninsula',
    levels: ['RU_03_01', 'RU_03_02']
  },
  {
    id: 'US_04',
    name: 'Yukon',
    levels: ['US_04_01', 'US_04_02']
  },
  {
    id: 'US_03',
    name: 'Wisconsin',
    levels: ['US_03_01', 'US_03_02']
  },
  {
    id: 'RU_04',
    name: 'Amur',
    levels: ['RU_04_01', 'RU_04_02', 'RU_04_03', 'RU_04_04']
  },
  {
    id: 'RU_05',
    name: 'Don',
    levels: ['RU_05_01', 'RU_05_02']
  },
  {
    id: 'US_06',
    name: 'Maine',
    levels: ['US_06_01', 'US_06_02']
  },
  {
    id: 'US_07',
    name: 'Tennessee',
    levels: ['US_07_01']
  },
  {
    id: 'RU_08',
    name: 'Belozersk',
    levels: ['RU_08_01', 'RU_08_02', 'RU_08_03', 'RU_08_04']
  }
];
