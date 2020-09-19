import GeoPoint from 'geopoint';
import { City, GetLongLat } from '../models/City';

const getCoordinate = (location: City[]): GetLongLat => {
  return {
    lat: parseFloat(location.map((v) => v.Latitude).toString()),
    long: parseFloat(location.map((v) => v.Longitude).toString()),
  };
};

const distance = (origin: GetLongLat, destination: GetLongLat): number => {
  const pointOne = new GeoPoint(origin.lat, origin.long);
  const pointTwo = new GeoPoint(destination.lat, destination.long);

  return Math.ceil(pointOne.distanceTo(pointTwo, true));
};

export { getCoordinate, distance as default };
