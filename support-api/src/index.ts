import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import connect from './connect';
const app: Application = express();
const port = 8082;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to the Mongoose & TypeScript example')
);

app.listen(port, () =>
  console.log(`Application started successfully on port ${port}.`)
);
const db = 'mongodb://diana:235412Support@ds133256.mlab.com:33256/support_schedule';
connect({db});
routes({ app });
