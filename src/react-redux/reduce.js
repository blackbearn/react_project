/**
 * Created by Admin on 2017/6/5.
 */
import initialState from './data'

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {...state, themeColor: action.themeColor}
    default:
      return state
  }
}
