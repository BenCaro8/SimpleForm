import customSort from './utils/sortJSON.js';
import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(express.json());

async function getSupervisors() {
  return axios.get(
    'https://609aae2c0f5a13001721bb02.mockapi.io/lightfeather/managers'
  ).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })
}

app.get('/api/supervisors', async (req, res) => {
  const supervisors = await getSupervisors()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    })

  const sorted = customSort(['jurisdiction', 'lastName', 'firstName'], supervisors);
  const filteredData = sorted.filter((element) =>
    element.jurisdiction.match(/[a-zA-Z]/)
  );

  const stringData = filteredData.map((element) => {
    return `${element.jurisdiction} - ${element.lastName}, ${element.firstName}`;
  })

  res.send(stringData);
});

app.post('/api/submit', (req, res) => {
  console.log(req.body)
  res.send()
})

await new Promise(resolve => app.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);