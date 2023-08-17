const express = require('express');
const cors = require('cors');
const config = require('config');

const app = express();
app.use(express.json());
app.use(cors());

//Endpoint
app.get("/", (req, res) => {
    res.send("UdeM DevOps line of emphasis 2023-2.  1st exercise ");
  });


const inventions = require('./libs/inventions/routes/inventions');
app.use(inventions);

const inventors = require('./libs/inventors/routes/inventors');
app.use(inventors);

const port = config.get('SERVER.port')
app.listen(port, () => {
    console.log(`Escuchando API en PORT:${port}`);
});