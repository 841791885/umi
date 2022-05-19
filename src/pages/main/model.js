const mainModel = {
  namespace: 'main',
  state: {
    count: 0,
  },
  effects: {
    *add3({ payload }, { put }) {
      console.log(payload, 'payload');
      yield put({
        type: 'ADD',
        payload,
      });
    },
    *wait2sAdd({ payload }, { call, put }) {
      console.log(payload, 'payload');
      function add3s(payload) {
        return new Promise((res) => {
          setTimeout(() => {
            res(payload);
          }, 2000);
        });
      }
      const result = yield call(add3s, payload);
      console.log('result', result);
      yield put({
        type: 'ADD',
        payload: result,
      });
    },
  },
  reducers: {
    ADD(state, { payload }) {
      return {
        ...state,
        count: state.count + payload,
      };
    },
    REDUCE(state, { payload }) {
      return {
        ...state,
        count: state.count - payload,
      };
    },
  },
};

export default mainModel;
/**
 *
 * @param {数组} arr
 * @param {关键字} key
 */

function Arr2str(arr, key) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(key)) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}
console.log(Arr2str('a', 'ba', 'cc', 'ds', 'ce'));
