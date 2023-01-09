import mysql from "mysql";
import pwd from "../pwd/index.js";

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "dev01",
  password: pwd,
  database: "dev",
});

export default db;
