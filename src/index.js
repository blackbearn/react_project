/**
 * Created by Administrator on 2017/6/5.
 */
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './reduxComment/store/store'
import App from './reduxComment/components/commentApp'
import {AppContainer} from 'react-hot-loader'

import '@/style/main.less'
import '@/style/style.css'
// render(
//   <AppContainer>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </AppContainer>,
//   document.getElementById('root')
// )
if (process.env.NODE_ENV === 'dev') {
  const renderApp = (Component) => {
    render(
      <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    )
  }

  renderApp(App)

// 模块热替换的 API
  if (module.hot) {
    module.hot.accept('./reduxComment/components/commentApp', () => {
      // const App = require('./app').default;
      renderApp(App)
    })
  }
} else {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}
