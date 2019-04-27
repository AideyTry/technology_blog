import axios from 'axios'
import { getHeaders } from '@/utils/store'
let headersContent = getHeaders()
console.log('process.env.BASE_API===', process.env.BASE_API)
console.log('headersContent===', headersContent)
// 创建axios实例
const fetch = axios.create({
  baseURL: 'http://127.0.0.1:8080/',
  headers: {
    'Content-Type': headersContent
    // 'Content-Type': 'application/json;charset=UTF-8'
  }
})

export default fetch
