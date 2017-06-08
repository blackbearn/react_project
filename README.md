# React-Project

技术栈

1. react v0.15.5
2. react-router-dom v4.x
3. react-route-redux v4.x
4. redux
5. react-redux
6. es6/7
7. webpack v2.4
8. ImmutableJS
9. less
10. axios
11. ant-design
12. echarts/recharts
13. d3
14. eslint

webpack插件
1. friendly-errors-webpack-plugin
2. html-webpack-plugin
3. clean-webpack-plugin
4. copy-webpack-plugin
5. optimize-css-assets-webpack-plugin
6. extract-text-webpack-plugin
7. webpack-merge
8. react-hot-loader
9. happypack
10. compression-webpack-plugin
11. webpack-parallel-uglify-plugin
12. webpack-dev-server

 ## 路径问题
 1. 需要使用的字体图标放在 ``./src/iconfont`` 目录下
 2. 需要在页面上使用的图片放在 ``./src/pageImage`` 目录下，通过在js中通过``require()``方式引入，
 3. 需要在css中使用的图片放在 ``./src/cssImage`` 目录下
 4. 所有资源按照正常路径引入
 
 **路径问题的最优解决办法是在生产环境下设置output的publicPath为服务器地址**

### 已了解
1. react
2. redux
3. webpack
4. eslint
5. react-redux
6. less

> TODO
1. react-router-dom V4.0
2. antd
3. redux-actions(创建符合符合FSA标准的action)
4. redux-promise(配合redux-actions处理符合FSA标准的action,处理异步请求同redux-thunk，不能共用)
5. redux-unhandled-action
> 开发过程中，若 Action 未使 State 发生变化则发出警告
````
import { createStore, applyMiddleware } from "redux";

import reduxUnhandledAction from "redux-unhandled-action";

import reducer from "./reducer";

const callback = (action) => console.error(`${action} didn't lead to creation of a new state object`);

const store = createStore(reducer, applyMiddleware(reduxUnhandledAction(callback)));
  ````

[ webpack构建优化 ](https://github.com/dwqs/blog/issues/52)
