import * as service from '../services/Statistics';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'income',

  state: {
    chart: {}
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
    * income({payload}, {call, put}) {
      const {start, end, type} = payload;
      const response = yield call(service.income, start, end, type);
      yield put({
        type: 'updateState',
        payload: {
          chart: response
        }
      })
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/income-statistics') {
          const currentTime = new Date().getTime();
          dispatch({
            type: 'income',
            payload: {start: currentTime - 1000 * 60 * 60 * 24 * 30, end: currentTime, type: 4}
          })
        }
      });
    },
  },

};
