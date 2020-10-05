const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const db = require("./db");
// app.use(
//     cors({
//       origin: ["http://apptest-env.eba-s55pps6a.us-east-2.elasticbeanstalk.com"],
//       credentials: true,
//     })
//   );
app.use("/", express.static(path.join(__dirname, "../client/dist/angular")));

app.use((req, res, next) => {
  res.send(__dirname, "../client/dist/angular", "index.html");
});

module.exports = app;
