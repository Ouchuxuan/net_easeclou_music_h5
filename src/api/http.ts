import axios from 'axios';
import appConfig from '../config/config.default'
const service = axios.create({
  timeout: 1000 * 60,
  // 允许跨域带token
  withCredentials: true,
  baseURL: appConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
})

// response 拦截器
service.interceptors.response.use(response => {
  return response
})

// get请求
const get = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params,
    }).then(res => {
      if (res.data.code === 200) {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    }).catch((err) => {
      reject(err.response);
    })
  })
}

// post请求
const post = (url:string, data = {}) => {
  return new Promise((resolve, reject) => {
    service.post(url,
      data,
    ).then(res => {
      if (res.data.code === 200) {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    }).catch((err) => {
      reject(err.response);
    })
  })
}

export default{
  get,
  post,
}