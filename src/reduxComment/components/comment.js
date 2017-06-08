import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import '../../style/commentInput.less';

@connect(mapStateToProps, mapDispatchToProps)
export default class Comment extends Component {
  static propTypes = {
    json: PropTypes.object,
    index: PropTypes.number,
    commentAction: PropTypes.object
  };
  static defaultProps = {
    json: {},
    index: 0,
    commentAction: {}
  };

  constructor () {
    super();
    this.state = {};
  }

  handleClick (index) {
    this.props.commentAction.deleteComment(index);
  }

  calTime (date) {
    let timeCount = (new Date().getTime() - date) /
      1000;
    if (timeCount < 60) {
      timeCount = `${Math.ceil(timeCount)}秒`;
    }
    if (timeCount / 60 < 60) {
      timeCount = `${Math.ceil(timeCount / 60)}分钟`;
    }
    if (timeCount / 60 / 60 < 24) {
      timeCount = `${Math.ceil(timeCount / 60 / 60)}小时`;
    }
    if (timeCount / 60 / 60 > 24) {
      timeCount = `${Math.ceil(timeCount / 60 / 60 / 24)}天`;
    }
    return timeCount;
  }

  render () {
    return (
      <li style={{ position: 'relative' }}>
        <i onClick={this.handleClick.bind(this, this.props.index)}>X</i>
        <p>{this.props.json.text}</p>
        <p style={{ textAlign: 'right' }}>
          <span>
            {this.props.json.name}
          </span>
          &nbsp;&nbsp;
          <span>
            发表于
            {this.calTime(this.props.json.date)}
            前
          </span>
        </p>
      </li>
    );
  }
}
