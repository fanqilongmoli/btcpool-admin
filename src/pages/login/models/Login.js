import * as loginService from '../services/Login';
import {message} from 'antd'
import config from "../../../utils/config";
export default {

  namespace: 'login',

  state: {},

  reducers: {

  },
  effects: {
    * login({payload}, {call, put}){
      const response = yield call(loginService.login,payload);
      window.localStorage.setItem(`${config.prefix}token`, response.token);
      window.localStorage.setItem(`${config.prefix}username`, response.username);
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

};
