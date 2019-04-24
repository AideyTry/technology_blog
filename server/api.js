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
    pool.getConnection((err, connection) => {
      // let sql = sqlMap.getValue
      let sql = 'SELECT * FROM blog'
      connection.query(sql, (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  setValue (req, res, next) {
    let title = req.body.title
    console.log('title=', title)
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
          let sql = `INSERT INTO blog(id, title, article, classify) VALUES (${id}, "${title}", "${article}", "${classify}")`
          connection.query(sql, [id, title, article, classify], (err, result) => {
            res.json(result)
            connection.release()
          })
        }
      })
    })
  }
}