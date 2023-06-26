import express, { Express } from 'express';
import routes from './routes';

const app: Express = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
