const express = require("express");
const app = require("./backend/app");
const PORT = process.env.PORT || 8080;
const db = require("./backend/db");
const session = require("express-session");
const http = require("http");

const userRoutes = require("./backend/routes/users");

app.set("port", PORT);

const server = http.createServer(app);
server.listen(PORT);

app.use(express.json());
// const cors = require("cors");
// app.use(
//   cors({
//     origin: ["http://localhost:4200"],
//     credentials: true,
//   })
// );
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.send(data);
      console.log(data);
    }
  });
});

app.use("/users", userRoutes);
