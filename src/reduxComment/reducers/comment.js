/**
 * Created by Administrator on 2017/6/5.
 */
import * as actionTypes from '../actions/actionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case actionTypes.INIT_COMMENT:
      state = [];
      return state.concat(action.comments);
    case actionTypes.ADD_COMMENT:
      const addState = state.concat(action.comment);
      window.localStorage.setItem('comments', JSON.stringify(addState));
      return addState;
    case actionTypes.DELETE_COMMENT:
      state.splice(action.commentIndex, 1);
      const deleteState = state.concat([]);
      window.localStorage.setItem('comments', JSON.stringify(deleteState));
      return deleteState;
    default:
      return state;
  }
}
