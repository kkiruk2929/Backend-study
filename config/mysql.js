const mysql = require("mysql"); //mysql 드라이버 불러오기
const { error } = require("mysql");
//DB 연결하는 개체 생성
const mysqlConnection = {
  init: function () {
    return mysql.createConnection({
      host: process.env.host,
      port: process.env.port,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database,
    });
  },
  //생성된 개체를 DB랑 연결
  open: function (con) {
    con.connect((err) => {
      if (err) {
        console.log("Mysql 연결 실패 : ", err);
      } else {
        console.log("Mysql 연결 성공");
      }
    });
  },
  //DB 연결 끊기
  close: function (con) {
    con.end((err) => {
      if (err) {
        console.log("Mysql 종료 실패 : ", err);
      } else {
        console.log("Mysql 종료 성공");
      }
    });
  },
};
module.exports = mysqlConnection; // mysql 연결 개체를 모듈화해서 외부 파일 부를수 있게 export
