import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * 支出统计
 * @param page
 * @param size
 * @returns {*}
 */
export function orders(page,size) {
  return request({
    url: `${apiPrefix}/api/hash-orders?page=${page}&size=${size}`,
    method: 'get',
  })
}

/**
 * 确认订单生效-管理员
 * @param id
 * @returns {*}
 */
export function ordersSucceed(id) {
  return request({
    url: `${apiPrefix}/api/hash-orders/${id}/succeed`,
    method: 'post',
  })
}
