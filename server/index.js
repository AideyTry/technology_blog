const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const routerApi = require('./router')

app.use('/api', routerApi)
// 后端api路由

app.listen(10087)
console.log('is ok!')