import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();

import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

import dotenv from 'dotenv';
dotenv.config();

const APP_VERSION = process.env.APP_VERSION;
const APP_PORT = process.env.APP_PORT;

// Config
app.set('port', APP_PORT);

// CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// Middlewares
app.use(bodyParser.json());
app.use(fileUpload());

// Importar rutas
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

// Rutas
app.use(`/${APP_VERSION}/auth`, authRoutes);
app.use(`/${APP_VERSION}/users`, userRoutes);

export default app;
