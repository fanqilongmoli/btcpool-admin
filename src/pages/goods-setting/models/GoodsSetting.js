import * as service from '../services/GoodsSetting';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'goods',

  state: {
    tableData: []
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
    * getHashrates({payload}, {call, put}) {
      const response = yield call(service.getHashrates);
      yield put({
        type: 'updateState',
        payload: {
          tableData: response.data.content
        }
      })

    },
    * addHashrates({payload}, {call, put}) {
      const response = yield call(service.addHashrates,payload);
      yield put({
        type: 'getHashrates'
      })
    },
    * delHashrates({payload}, {call, put}) {
      const {id} = payload;
      const response = yield call(service.delHashrates,id);
      yield put({
        type: 'getHashrates'
      })
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/goods-setting') {
          dispatch({
            type: 'getHashrates'
          });
        }
      });
    },
  },

};
