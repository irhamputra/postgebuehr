import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import cityRoute from './router/cities';
import calculationRoute from './router/calculation';

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/city', cityRoute);
app.use('/api/v1/calculation', calculationRoute);

// TODO: create GraphQL Endpoint

app.listen(3000, () => console.log('Running on port 3000'));
