let mysql = require('mysql')
console.log('mysql=', mysql)
const mysqlConfig = {
  // host: '192.168.4.80',
  // user: 'root',
  // password: 'bakheet001',
  // database: 'daitest',
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'technologyblog',
  port: '3306'
}
const connection = mysql.createConnection({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database
})
// console.log('pool=', pool)
// let db = mysql.createConnection(mysqlConfig)
// db.connect()
// exports.do = function (sql, c)
connection.connect()
let sql = 'INSERT INTO blog(id, name) VALUES (null, "blog6")'
connection.query(sql, (err, result) => {
  console.log('err=', err)
  console.log('result=', result)
})
// let setValue = function () {
//   pool.getConnection((err, connection) => {
//     let sql = 'INSERT INTO blog(id, name) VALUES (null, "blog")'
//     connection.query(sql,(err, result)=>{
//       console.log(result)
//       connection.release()
//     })
//   })
// }

// setValue()