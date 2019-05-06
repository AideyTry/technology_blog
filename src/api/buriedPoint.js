import request from '@/utils/request'

export const setPoint = (params) => {
  return request({
    url: `api/setPoint`,
    method: 'post',
    data: params || {}
  })
}
