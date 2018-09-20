import * as userManageService from '../services/UserManage';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'userManage',

  state: {
    users: {},
    currentPage: 0
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
    * accounts({payload}, {call, put}) {
      const {page, size} = payload;
      const response = yield call(userManageService.accounts, page, size);
      yield put({
        type: 'updateState',
        payload: {
          users: response, currentPage: page
        }
      })

    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/user-manage') {
          dispatch({
            type: 'accounts',
            payload: {page: 0, size: 10}
          });
        }
      });
    },
  },

};
