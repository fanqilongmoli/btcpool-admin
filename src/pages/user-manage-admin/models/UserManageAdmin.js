import * as userManageService from '../services/UserManageAdmin';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'userManageAdmin',

  state: {
    adminUser: {}
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
      const response = yield call(userManageService.adminUser, page, size);
      console.log(response);
      yield put({
        type: 'updateState',
        payload: {
          adminUser: response
        }
      })

    },
    * addAdminUser({payload}, {call, put}) {
      const response = yield call(userManageService.addAdminUser,payload);
      yield put({
        type: 'accounts',
        payload: {page: 0, size: 10}
      })
    },
    * delAdminUser({payload}, {call, put}) {
      const response = yield call(userManageService.delAdminUser,payload.username);
      yield put({
        type: 'accounts',
        payload: {page: 0, size: 10}
      })
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/user-manage-admin') {
          dispatch({
            type: 'accounts',
            payload: {page: 0, size: 10}
          });
        }
      });
    },
  },

};
