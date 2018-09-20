import * as service from '../services/ProductCalc';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'product',

  state: {
    tableData: [],
    editingKey:'',
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
    * getParameters({payload}, {call, put}) {
      const response = yield call(service.getParameters);
      yield put({
        type: 'updateState',
        payload: {
          tableData: response.content
        }
      })

    },
    * addParameters({payload}, {call, put}) {
      const response = yield call(service.addParameters, payload);
      yield put({
        type: 'getParameters'
      })

    },
    * delParameters({payload}, {call, put}) {
      const {name} = payload;
      const response = yield call(service.delParameters, name);
      yield put({
        type: 'getParameters'
      })

    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/product-calc') {
          dispatch({
            type: 'getParameters'
          });
        }
      });
    },
  },

};
