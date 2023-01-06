const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mysqlConObj = require("./config/mysql");
const { response } = require("express");
const db = mysqlConObj.init();
app.set("view engine", "ejs");

mysqlConObj.open(db);

app.get("/main", (req, res) => {
  const query = "SELECT * from topics";
  db.query(query, (err, result) => {
    err ? res.send(err) : res.render("main", { data: result });
  });
});
app.get("/Create", (req, res) => {
  res.render("Create");
});

app.post("/Create", (req, res) => {
  const Title = req.body.Title;
  const Article = req.body.Article;
  const query = `
    insert into topics(Title ,Article,Created)
    values(?,?,DATE_FORMAT(now(), '%Y-%m-%d'))`;
  db.query(query, [Title, Article], (err, result) => {
    err ? res.send(err) : res.send("/main");
  });
});

app.get("/", (req, res) => res.send("정상적으로 서버 작동중"));

app.listen(8080, () => console.log("서버 연결중..."));
