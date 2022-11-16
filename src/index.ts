import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello, World!</h1>');
});

app.listen(port, () => {
  console.log(` ⚡️ [server]: runing on http://localhost:${port}`);
});
