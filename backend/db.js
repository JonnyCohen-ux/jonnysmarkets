// const mySql = require("mysql");
// const mySqlConnection = mySql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "buy_and_sell",
// });

// mySqlConnection.connect((error) => {
//   if (error) {
//     throw error;
//   }
//   console.log(`Database Connected`);
// });

// module.export = mySqlConnection;

const mySql = require("mysql");

const connectMysql = mySql.createConnection({
  host: "localhost",
  user: "root",
  database: "buy_and_sell",
});

// יש משהו של טיים אווט בוא ננסה אותו xccv
// const pool = mySql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   user: "root",
//   database: "shopping_online",
// });
connectMysql.connect((error) => {
  if (error) throw error;
  console.log("Database connected");
});

module.exports = connectMysql;
