import * as service from '../services/OrderManage';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'orderManage',

  state: {
    orders: {},
    currentPage: 0,
  },

  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    * orders({payload}, {call, put}) {
      const {page, size} = payload;
      const response = yield call(service.orders, page, size);
      yield put({
        type: 'updateState',
        payload: {
          orders: response, currentPage: page
        }
      })
    },
    * ordersSucceed({payload}, {call, put, select}) {

      const response = yield call(service.ordersSucceed, payload.id);
      const orderManage = yield select(state => state.orderManage);
      yield put({
        type: 'orders',
        payload: {page: orderManage.currentPage , size: 10}
      })

    },

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/order-manage') {
          dispatch({
            type: 'orders',
            payload: {page: 0, size: 10}
          })
        }
      });
    },
  },

};
