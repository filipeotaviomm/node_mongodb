// config inicial
require("dotenv").config();
const express = require("express");
const app = express();

// depois do db
const mongoose = require("mongoose");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose
  .connect(
    // url tirada do mongodb atlas
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.nsliktf.mongodb.net/bancodaapi?retryWrites=true&w=majority&appName=APICluster`
  )
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
