const path = require('path')
const express = require('express')
const app = express()

app.get('/api/getArticle', (req, res, next) => {
  res.json({
    data: '后台返回的数据 getArticle'
  })
})

app.listen(3000)