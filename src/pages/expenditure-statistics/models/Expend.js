import * as service from '../../income-statistics/services/Statistics';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'expend',

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
    * expense({payload}, {call, put}) {
      const {start, end, type} = payload;
      const response = yield call(service.expense, start, end, type);
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
        if (pathname === '/expenditure-statistics') {
          const currentTime = new Date().getTime();
          dispatch({
            type: 'expense',
            payload: {start: currentTime - 1000 * 60 * 60 * 24 * 30, end: currentTime, type: 4}
          })
        }
      });
    },
  },

};
