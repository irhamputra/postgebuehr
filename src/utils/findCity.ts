import mockCities from '../mock/cities.json';
import { City } from '../models/City';

const findCity = (postal: string): City[] => {
  return mockCities
    .filter((city: City) => {
      return city.Postal.split(',').some((c) => c === postal);
    })
    .map((city: City) => {
      return {
        ...city,
        Postal: city.Postal.split(',')
          .filter((c) => c === postal)
          .toString(),
      };
    });
};

export default findCity;
