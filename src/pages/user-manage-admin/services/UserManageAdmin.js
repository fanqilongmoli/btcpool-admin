import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * 获取管理员列表
 * @returns {*}
 */
export function adminUser(page, size) {
  return request({
    url: `${apiPrefix}/api/admin/users?page=${page}&size=${size}`,
    method: 'get'
  })
}

/**
 * 管理员新增/修改-管理员
 * @returns {*}
 */
export function addAdminUser(data) {
  return request({
    url: `${apiPrefix}/api/admin/users`,
    method: 'post',
    data
  })
}

/**
 * 管理员删除-管理员
 * @returns {*}
 */
export function delAdminUser(userName) {
  return request({
    url: `${apiPrefix}/api/admin/users/${userName}`,
    method: 'delete',
  })
}
