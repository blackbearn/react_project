/**
 * Created by Admin on 2017/6/5.
 */
import dispatch from './redux/dispatch'
import store from './redux/store'

const createStore = store(dispatch)

const renderTitle = (oldState, state) => {
  if (oldState === state) return
  console.log('render title')
  const title = document.getElementById('title')
  title.innerHTML = state.text
  title.style.color = state.color
}

const renderContent = (oldState, state) => {
  if (oldState === state) return
  console.log('render content')
  const content = document.getElementById('content')
  content.innerHTML = state.text
  content.style.color = state.color
}

const renderApp = (oldState, state) => {
  renderTitle(oldState.title, state.title)
  renderContent(oldState.content, state.content)
}

renderApp({}, createStore.getState())

let oldState = createStore.getState()

createStore.subscribe(() => {
  const newState = createStore.getState()
  renderApp(oldState, newState)
  oldState = newState
})

createStore.dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'})

