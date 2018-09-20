import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * /api/parameters/{name}参数删除-管理员
 * @returns {*}
 */
export function delParameters(name) {
  return request({
    url: `${apiPrefix}/api/parameters/${name}`,
    method: 'delete'
  })
}


/**
 * /api/parameters参数新增/修改-管理员
 * @returns {*}
 */
export function addParameters(data) {
  return request({
    url: `${apiPrefix}/api/parameters`,
    method: 'post',
    data
  })
}

/**
 * /api/parameters 获取参数列表
 * @returns {*}
 */
export function getParameters() {
  return request({
    url: `${apiPrefix}/api/parameters`,
    method: 'get'
  })
}
