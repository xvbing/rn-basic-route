/**
 ** Created by Bingo on 2021/2/24.
 ** desc:
 **/

import NavigationService from '../components/global/NavigationService';
import axios from 'axios';
import qs from 'qs';

// axios初始化
const instance = axios.create({
  baseURL: 'https://deal.paifou.com',
  // baseURL: 'http://192.168.176.139:83',
  timeout: 3000,
  headers: {'X-Custom-Header': 'foobar'},
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // console.log(config)
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // console.log(response.data);
    if (response.data.code === 401) {
      // console.log(NavigationService);
      // NavigationService.navigate('LoginVx');
      NavigationService.navigate('LoginView');
      return Promise.resolve(response);
    } else {
      return Promise.resolve(response);
    }
    // return response;
  },
  error => {
    return Promise.reject(error);
  },
);

const http = async (opts, data, header, isImg, isFile) => {
  let headers =
    opts.method === 'get'
      ? {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
        }
      : {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        };
  if (isFile) {
    headers['Content-type'] = 'multipart/form-data';
  }
  let token = await global.storage.load({key: 'user-info'});
  if (token) {
    headers['app-token'] = token['app-token'];
    // token写死
    // headers['app-token'] = 'dnhoNV8zMDc4XzE2MTY1NDgxNjY=';
    // headers['app-token'] = 'dnhoNV8zXzE2MTM5MDA5MzI='; // 大脸
  }
  let config = {
    url: opts.url,
    method: opts.method,
    headers: headers,
  };
  if (opts.method === 'get') {
    config.params = data;
  } else {
    if (isFile) {
      config.data = data;
    } else {
      config.data = qs.stringify(data);
    }
  }
  if (isImg) {
    config.responseType = 'arraybuffer';
  }
  // console.log(config);
  return instance.request(config);
};

export default http;
