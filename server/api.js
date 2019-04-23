const mysql = require('mysql')
const dbConfig = require('./db.js')
const sqlMap = require('./sqlMap.js')

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true  // 多语句查询
})

module.exports = {
  getValue(req, res, next) {
    let id = req.query.id
    pool.getConnection((err, connection) => {
      let sql = sqlMap.getValue
      connection.query(sql, [id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  setValue(req, res, next) {
    let id = req.body.id
    let name = res.body.name
    pool.getConnection((err, connection) => {
      let sql = sqlMap.setValue
      connection.query(sql, [name, id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  }
}