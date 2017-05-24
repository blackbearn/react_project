import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import '@/style/main.less';
import '@/style/style.css';

import App from './app';
if (process.env.NODE_ENV === 'dev') {

    const render = (Component) => {
        ReactDOM.render(
            <AppContainer>
                <Component/>
            </AppContainer>,
            document.getElementById('root')
        );
    };

    render(App);

// 模块热替换的 API
    if (module.hot) {
        module.hot.accept('./app', () => {
            // const App = require('./app').default;
            render(App);
        });
    }
} else {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}
