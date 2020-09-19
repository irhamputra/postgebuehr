import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import joi from 'joi';

const router = express.Router();

router.get('/', (req, res) => {
  return res.json('User API');
});

router.post('/', (req, res) => {
  return res.status(200).json('POST User API');
});

export default router;
