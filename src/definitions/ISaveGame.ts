export interface SaveGame {
  CompleteSave: {
    SslValue: SaveGameValue;
  };
}

export type UpgradeData = { [key: string]: number };

export interface SaveGameValue {
  isHardMode: boolean;
  objectiveStates: { [key: string]: ObjectiveState };
  persistentProfileData: ProfileData;
  upgradesGiverData: { [key: string]: UpgradeData };
  waypoints: { [key: string]: any[] };
  watchPointsData: WatchPointsData;
}

export interface ProfileData {
  money: number;
  experience: number;
  rank: number;
};

export interface ObjectiveState {
  id: string;
  isFinished: boolean;
  stagesState: StageState[];
};

export interface StageState {
  cargoDeliveryActions: CargoDeliveryAction[];
  truckDeliveryStates: TruckDeliveryState[];
  truckRepairStates: TruckRepairState[];
  visitAllZonesState: VisitZonesState;
};

export interface CargoDeliveryAction {
  cargoState: {
    type: string;
    curValue: number;
    aimValue: number;
  };
  map: string;
  zones: string[];
}

export interface TruckDeliveryState {
  deliveryZones: string[];
  truckId: string;
  mapDelivery: string;
  isDelivered: boolean;
}

export interface TruckRepairState {
  truckId: string;
  isRefueled: boolean;
  isRepaired: boolean;
}

export interface VisitZonesState {
  map: string;
  zoneStates: ZoneState[];
}

export interface ZoneState {
  zone: string;
  isVisitWithCertainTruck: boolean;
  isVisited: boolean;
  truckUid: string;
}

export type WatchPointMap = { [key: string]: boolean }

export interface WatchPointsData {
  data: { [key: string]: WatchPointMap };
}
