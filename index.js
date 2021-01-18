const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const {readdirSync} = require('fs');
const { DATABASE, PORT } = require("./config");

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(`DB CONNECTION ERR ${err}`));

readdirSync('./routes').map((r) => 
  app.use('/', require('./routes/' + r)))

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
