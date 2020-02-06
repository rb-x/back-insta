const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());

app.listen(port, () => console.log(`listening on port ${port}`));
