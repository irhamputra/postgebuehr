export interface City {
  Code: number;
  Parent: number;
  Name: string;
  Latitude: number;
  Longitude: number;
  Postal: string;
}

export interface GetLongLat {
  lat: number;
  long: number;
}

export interface Distance {
  from: string;
  to: string;
}
