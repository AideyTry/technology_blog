const mysql = require('mysql')
let Path = require('path')
const Formidable = require('formidable')
let FS = require('fs')
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
  getArticleDeatil (req, res, next) {
    let id = req.query.id
    pool.getConnection((err, connection) => {
      let sql = `SELECT * FROM blog WHERE id = ${id}`
      connection.query(sql, [id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  setValue (req, res, next) {
    let title = req.body.title
    let article = req.body.article
    let description = req.body.description
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
          let sql = `INSERT INTO blog(id, title, description, article, classify) VALUES (${id}, "${title}", "${description}", "${article}", "${classify}")`
          connection.query(sql, [id, title, description, article, classify], (err, result) => {
            if (err) throw err
            res.json(result)
            connection.release()
          })
        }
      })
    })
  },
  upLoadImg (req, res, next) {
    let From = new Formidable.IncomingForm()
    let TargetFile = Path.join(__dirname, './Public/')
    From.uploadDir = TargetFile
    From.parse(req, (err, fields, files) => {
      if (err) throw err
      let FilePath = files.Content.path
      let NewPath = Path.join(Path.dirname(FilePath), files.Content.name)
      FS.rename(FilePath, NewPath, (err) => {
        if(err) throw err
        let MyJson = {
          errno: 0,
          data: ['http://localhost:8088/' + files.Content.name]
        }
        res.json(MyJson)
      })
    })
  }
}