const express = require('express')
const router = express.Router()
const api = require('./api.js')
router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next)
})

router.use('/article', (req, res, next) => {
  api.article(req, res, next)
})

router.get('/getArticleDeatil', (req, res, next) => {
  api.getArticleDeatil(req, res, next)
})

router.post('/upload', (req , res, next) => {
  api.upLoadImg(req, res, next)
})

// 埋点
router.post('/setPoint', (req , res, next) => {
  api.setPoint(req, res, next)
})

module.exports = router