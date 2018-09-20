import * as userManageService from '../services/Withdraw';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'withdraw',

  state: {
    withdraws: {},
    state: 0
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
    * withdrawApply({payload}, {call, put, select}) {
      const withdraw = yield select(state => state.withdraw);
      const {page, size} = payload;
      const response = yield call(userManageService.withdrawApply, page, size, withdraw.state);
      console.log(response);
      yield put({
        type: 'updateState',
        payload: {
          withdraws: response
        }
      })

    },
    * withdrawApplySuccess({payload}, {call, put, select}) {

      const {id} = payload;
      const response = yield call(userManageService.withdrawApplySuccess, id);
      console.log(response);
      yield put({
        type: 'withdrawApply',
        payload: {page: 0, size: 10}
      })
    },

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/withdraw-examine') {
          dispatch({
            type: 'withdrawApply',
            payload: {page: 0, size: 10,}
          });
        }
      });
    },
  },

};
