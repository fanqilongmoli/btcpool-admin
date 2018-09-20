import request from '../../../utils/request';
import config from '../../../utils/config';

const {apiPrefix} = config;

/**
 * /api/withdraw-apply 提现申请列表-管理员 state:0-未通过 1-已通过
 * @returns {*}
 */
export function withdrawApply(page, size, state) {
  return request({
    url: `${apiPrefix}/api/withdraw-apply?page=${page}&size=${size}&state=${state}`,
    method: 'get'
  })
}

/**
 * /api/withdraw-apply/{id}/succeed 申请提现批准-管理员
 * @returns {*}
 */
export function withdrawApplySuccess(id) {
  return request({
    url: `${apiPrefix}/api/withdraw-apply/${id}/succeed`,
    method: 'post',
  })
}
