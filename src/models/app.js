export default {

  namespace: 'app',

  state: {
    selectedKeys: "1"
  },
  reducers: {
    updateState(state, {payload}){
      return {
        ...state,
        ...payload,
      }
    }
  },
  effects: {},
  subscriptions: {
    setup({dispatch, history}) {
    },
  },

};
