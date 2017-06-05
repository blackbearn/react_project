/**
 * Created by Admin on 2017/6/5.
 */
import reduce from './reduce';

const store = (stateChange) => {
  let state = undefined;
  const listeners = [];
  const subscribe = (list) => listeners.push(list);
  const getState = () => state;
  const dispatch = (action) => {
    state = stateChange(state, action);
    listeners.forEach(list => list());
  };
  dispatch({});
  return {getState, subscribe, dispatch};
};

export default store(reduce);
