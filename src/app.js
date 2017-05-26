import React from 'react';
import { Button, Icon } from 'antd';
import Page from './page/page';
const imgURL = require('./pageImage/1.jpg');

const App = () => (
  <div className="kidding">
    <Button type="primary">click</Button>
    <h2>Hello！@！</h2>
    {/* <i className="iconfont iconfont-tianjia"/> */}
    <i className="iconfont">&#xe649;</i>
    <Icon type="smile"/>
    {/* <img src={imgURL} alt=""/> */}
    <Page/>
  </div>
);

export default App;