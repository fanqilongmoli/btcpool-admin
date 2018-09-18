/* global window */
import axios from 'axios'
import cloneDeep from 'lodash.clonedeep'
import config from '../utils/config'

const fetch = (options) => {
  let headers;

  if (window.localStorage.getItem(`${config.prefix}token`) == null) {
    headers = {};
  } else {
    headers = {'Authorization': 'Bearer ' + window.localStorage.getItem(`${config.prefix}token`)};
  }

  let {
    method = 'get',
    data,
    url,
  } = options;

  const cloneData = cloneDeep(data);
  switch (method.toLowerCase()) {
    case 'get':
      if (url.indexOf('?') > 0) {
        url = url + '&time=' + new Date().getTime();
      } else {
        url = url + '?time=' + new Date().getTime();
      }

      return axios.get(url, {
        params: cloneData,
        headers: headers
      });
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
        headers: headers
      });
    case 'post':
      return axios.post(url, cloneData, {
        headers: headers
      });
    case 'put':
      return axios.put(url, cloneData, {
        headers: headers
      });
    case 'patch':
      return axios.patch(url, cloneData, {
        headers: headers
      });
    default:
      return axios(options)
  }
};

export default function request(options) {
  return fetch(options).then(response => {
    const {statusText, status} = response;
    let data = response.data;
    if (data instanceof Array) {
      data = {
        list: data,
      }
    }
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      ...data,
    })
  }).catch(error => {

    console.log('error', error);
    const {response} = error;
    let msg;
    let statusCode;
    if (response && response instanceof Object) {
      const {data, statusText} = response;
      statusCode = response.status;
      msg = data.errors || statusText
    } else {
      statusCode = 600;
      msg = error.message || '网络错误'
    }
    return Promise.reject({success: false, statusCode, message: msg})
  })
}
