require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");

const {
  getHouses,
  createHouse,
  deleteHouse
} = require(`${__dirname}/controller`);

const app = express();

app.use(json());
app.use(cors());

const port = process.env.PORT || 4000;

// endpoints
app.get("/api/houses", getHouses);
app.post("/api/house", createHouse);
app.delete("/api/house/:id", deleteHouse);

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    console.log("database is connecting");
    app.set("db", dbInstance);
  })
  .catch(err => {
    app.set("db", dbInstance);
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Li's listening on port: ${port}`);
});
