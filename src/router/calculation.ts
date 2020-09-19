import express from 'express';
import findCity from '../utils/findCity';
import findDistance, { getCoordinate } from '../utils/geopoint';
import { Distance } from '../models/City';

const router = express.Router();

// TODO: add middleware for auth
router.post<{}, { distance: string }, Distance>('/', (req, res) => {
  const { from, to } = req.body;

  const firstCity = findCity(from);
  const secondCity = findCity(to);

  const pointOne = getCoordinate(firstCity);
  const pointTwo = getCoordinate(secondCity);

  const distance = findDistance(pointOne, pointTwo);

  // TODO: calculate the price from origin to destination
  // should return the price
  res.status(200).json({ distance: `${distance} KM` });
});

export default router;
