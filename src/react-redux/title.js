/**
 * Created by Admin on 2017/6/5.
 */
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect, mapStateToProps} from './connect';

@connect(mapStateToProps)
export default class Title extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  };

  render () {
    return (
      <h3 style={{color: this.props.themeColor}}>react-redux</h3>
    );
  }
}
