const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mysqlConObj = require("./config/mysql.js");
const { response } = require("express");
const db = mysqlConObj.init();

mysqlConObj.open(db);
// /api/customers로 접속하면 고생 문구 나옴
app.get("/api/user", (require, response) => response.send("사용자 정보"));

app.listen(8080, () => console.log("서버 연결중..."));
