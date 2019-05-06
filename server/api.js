const mysql = require('mysql')
let path = require('path')
const formidable = require('formidable')
let fs = require('fs')
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
  article (req, res, next) {
    // console.log('req============', req)
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
    let from = new formidable.IncomingForm()
    let imgPath = path.join(__dirname, '../static/public/')
    if (!fs.existsSync(imgPath)) {
      fs.mkdirSync(imgPath)
    }
    from.uploadDir = imgPath
    from.parse(req, function (err, fields, files) {
      if (err) {
        throw err
      }
      let imgPath = files.file.path
      let imgName = `mutou.${files.file.type.split("/")[1]}`
      let data = fs.readFileSync(imgPath)
      fs.writeFile('../static/public/' + imgName, data, (err) => {
        if (err) throw err
        fs.unlink(imgPath, () => { })
        res.json({ code: 1, path: '/static/public/' + imgName })
      })
    })
  },
  setPoint (req, res, next) {
    pool.getConnection((err, connection) => {
      let getBuriedPoint = 'select * from buried_point'
      let promise1 = new Promise((resolve) => {
        connection.query(getBuriedPoint, (err, result) => {
          let id = result.length + 1
          let count = id
          resolve({id: id, count: count})
        })
      })
      promise1.then((obj) => {
        if (obj.id) {
          let sql = `INSERT INTO buried_point(id, count) VALUES (${obj.id}, ${obj.count})`
          connection.query(sql, [obj.id, obj.count], (err, result) => {
            if (err) throw err
            res.json(result)
            connection.release()
          })
        }
      })
    })
  }
}