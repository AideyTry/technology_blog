let mysql = require('mysql')

const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'mysql',
  port: '3306'
}
const pool = mysql.createPool({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  port: mysqlConfig.port,
  multipleStatements: true
})

let setValue = function () {
  pool.getConnection((err, connection) => {
    let sql = 'INSERT INTO blog(id, name) VALUES (1, "blog")'
    connection.query(sql,(err, result)=>{
      console.log(result)
      connection.release()
    })
  })
}

setValue()