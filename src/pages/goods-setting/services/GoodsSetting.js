import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * /api/hashrates 所有算力产品
 * @returns {*}
 */
export function getHashrates() {
  return request({
    url: `${apiPrefix}/api/hashrates`,
    method: 'get'
  })
}

/**
 * /api/hashrates 新增算力产品-管理员
 * @returns {*}
 */
export function addHashrates(data) {
  return request({
    url: `${apiPrefix}/api/hashrates`,
    method: 'post',
    data
  })
}

/**
 * /api/hashrates 删除算力产品-管理员
 * @returns {*}
 */
export function delHashrates(id) {
  return request({
    url: `${apiPrefix}/api/hashrates/${id}`,
    method: 'delete',
  })
}


