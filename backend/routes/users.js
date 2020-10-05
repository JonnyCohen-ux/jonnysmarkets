const router = require("express").Router();
const session = require("express-session");
const pool = require("../db");

router.get("/auth/user", (req, res) => {
  console.log(req.session.info);
  if (req.session.info.isLog) {
    console.log("session work");
    return res.status(200).send(req.session.info);
  }
  res.status(403).send({
    message: "Auth fail",
  });
});

router.post("/test", (req, res) => {
  req.session.user = {
    account_number: req.body.account_number,
    isLog: req.body.isLog,
  };
  res.send(req.session.user);
});

//Create new user
router.post("/create/user", (req, res) => {
  pool.query(`INSERT INTO users SET ?`, req.body, (error, data) => {
    if (error) {
      res.status(500).send(error);
    }
    res.status(200).send({
      messaege: "User craeted",
    });
  });
  console.log(req.body);
});

router.post("/login", (req, res) => {
  pool.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [req.body.email, req.body.password],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
        console.log(err);
      } else if (results.length === 0) {
        res.send({
          message: "Wrong Email or Password",
        });
      } else {
        const user = results[0];
        req.session.info = {
          id: user.id,
          name: user.name,
          email: user.email,
          isLog: true,
        };
        res.send({
          message: "",
          userLogInData: req.session.info,
        });
      }
    }
  );
});

//Logout
router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    console.log("db Log", error);
  });
  res.status(200).send({
    mesage: "User log out",
    isLog: false,
  });
});

module.exports = router;
