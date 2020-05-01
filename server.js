const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// const corsOptions = {
//   origin: "http://localhost:4000",
// };

// app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./src/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// test route
app.get("/", (req, res) => {
  res.json({ message: "Hello and welcome!" });
});

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
