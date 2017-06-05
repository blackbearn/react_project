/**
 * Created by Administrator on 2017/6/5.
 */
import * as actionTypes from'../actions/actionTypes'

export default function (state = {}, action) {
  switch (action.type) {
    case actionTypes.INIT_COMMENT:
      return {
        ...state
      }
    case actionTypes.ADD_COMMENT:
      return {
        ...state
      }
    case actionTypes.DELETE_COMMENT:
      return {
        ...state
      }
    default:
      return state
  }
}
