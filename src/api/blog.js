import request from '@/utils/request'

export const article = (params) => {
  return request({
    url: `api/article`,
    method: 'post',
    data: params
  })
}

export const upload = (params) => {
  return request({
    url: `api/upload`,
    method: 'post',
    data: params
  })
}

export const getValue = () => {
  return request({
    url: 'api/getValue',
    method: 'get'
  })
}

export const getArticleDeatil = (id) => {
  return request({
    url: `api/getArticleDeatil?id=${id}`,
    method: 'get'
  })
}
