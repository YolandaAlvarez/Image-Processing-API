import express, { Request, Response, Router } from 'express';
import images from './api/imagesApi';

const routes: Router = express.Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('main api route');
});

routes.use('/images', images);

export default routes;
