/**
 * Created by Admin on 2017/6/14.
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class About extends Component {
  render () {
    console.log(this.props);
    return (
      <div style={{ background: 'blue' }}>
        <i className="iconfont">&#xe649;</i>
        about
      </div>
    );
  }
}

export default withRouter(About);
