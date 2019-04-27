const express = require('express')
const router = express.Router()
const api = require('./api.js')
router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next)
})

router.use('/article', (req, res, next) => {
  console.log('req==========', req.body)
  api.article(req, res, next)
})

router.get('/getArticleDeatil', (req, res, next) => {
  api.getArticleDeatil(req, res, next)
})

router.post('/upload', (req , res, next) => {
  api.upLoadImg(req, res, next)
})

module.exports = router