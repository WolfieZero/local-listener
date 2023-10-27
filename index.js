import express from 'express';
import bodyParser from 'body-parser';
import { logger, newLine, split } from './utilities';

const app = express();
const port = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

app.get('/*', (req, res) => {
  res.send('Listening...');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  newLine();
  split();
});
