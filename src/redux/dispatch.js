/**
 * Created by Admin on 2017/6/5.
 */
import initialState from './data'
const dispatch = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      console.log({
        ...state,
        ...{
          title: {
            text: action.text
          }
        }
      })
      return {
        ...state,
        title: {
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          color: action.color
        }
      }
    default:
      return state
  }
}
export default dispatch
