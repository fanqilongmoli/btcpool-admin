import * as service from '../services/RechargeManage';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'recharge',

  state: {
    users: {}
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
    * charges({payload}, {call, put}) {
      const {page, size} = payload;
      const response = yield call(service.charges, page, size);
      yield put({
        type: 'updateState',
        payload: {
          users: response
        }
      })

    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/recharge-manage') {
          dispatch({
            type: 'charges',
            payload: {page: 0, size: 10}
          });
        }
      });
    },
  },

};
