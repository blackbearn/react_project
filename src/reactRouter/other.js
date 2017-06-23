/**
 * Created by Admin on 2017/6/14.
 */
import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

export default class Other extends Component {
  render () {
    console.log(this.props);
    return (
      <div style={{ background: 'red' }}>other</div>
    );
  }
}

// export default withRouter(Other);
