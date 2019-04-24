const mysql = require('mysql')
const dbConfig = require('./db.js')
// const sqlMap = require('./sqlMap.js')

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true  // 多语句查询
})

module.exports = {
  getValue (req, res, next) {
    let id = req.query.id
    pool.getConnection((err, connection) => {
      // let sql = sqlMap.getValue
      let sql = 'SELECT * FROM test WHERE id = 1'
      connection.query(sql, [id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  setValue (req, res, next) {
    let article = req.body.article
    let classify = req.body.classify
    pool.getConnection((err, connection) => {
      let getBlog = 'select * from blog'
      new Promise((resolve) => {
        connection.query(getBlog, (err, result) => {
          let id = result.length || 1
          resolve(id)
        })
      }).then((id) => {
        if (id) {
          let sql = `INSERT INTO blog(id, article, classify) VALUES (${id}, "${article}", "${classify}")`
          connection.query(sql, [id, article, classify], (err, result) => {
            res.json(result)
            connection.release()
          })
        }
      })
    })
  }
}