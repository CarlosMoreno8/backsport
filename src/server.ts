import express from 'express';
import { connect } from './utils/sequelize';

const app = express();
const port = 3000;
const client = connect();
client.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
app.listen(port, () => {
  console.log(`Server working on ${port}.`);
});