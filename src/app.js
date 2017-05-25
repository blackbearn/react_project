import React from 'react';
import {Button, Icon} from 'antd';

const App = () => (
    <div className="kidding">
        <Button type="primary">click</Button>
        <h2>Hello！@！</h2>
        {/*<i className="iconfont iconfont-tianjia"/>*/}
        <i className="iconfont">&#xe649;</i>
        <Icon type="smile"/>
    </div>
);

export default App;