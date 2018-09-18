import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * 获取普通用户列表
 * @returns {*}
 */
export function accounts(page,size) {
  return request({
    url: `${apiPrefix}/api/accounts?page=${page}&size=${size}`,
    method: 'get'
  })
}

