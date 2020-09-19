import express from 'express';
import mockCities from '../mock/cities.json';
import findCity from '../utils/findCity';
import { City, Distance } from '../models/City';

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json(mockCities);
});

router.get<{ postal: string }, City[]>('/:postal', (req, res) => {
  const { postal } = req.params;

  const findOne = findCity(postal);

  res.status(200).json(findOne);
});

router.get<Distance, City[]>('/:from/:to', (req, res) => {
  const { from, to } = req.params;

  const findFirst = findCity(from);
  const findSecond = findCity(to);

  const findBoth = [...findFirst, ...findSecond];

  return res.status(200).json(findBoth);
});

export default router;
