/**
 * Created by Admin on 2017/6/5.
 */
const store = (stateChange) => {
  let state = undefined;
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = stateChange(state, action);
    listeners.forEach(list => {
      list();
    });
  };
  dispatch({});
  return {getState, dispatch, subscribe};
};

export default store;
