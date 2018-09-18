import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * 用户登录
 * @param data
 * @returns {*}
 */
export function login(data) {
  return request({
    url: `${apiPrefix}/admin/login`,
    method: 'post',
    data
  })
}
