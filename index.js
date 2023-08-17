import express from "express";
import cors from "cors";
import 'dotenv/config'

const app = express();
app.use(express.json());
app.use(cors());

//Endpoint
app.get("/", (req, res) => {
    res.send("UdeM DevOps line of emphasis 2023-2.  1st exercise ");
  });

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Escuchando API en PORT:${port}`);
});