/**
 * Created by Administrator on 2017/6/6.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import CommentInput from './commentInput';
import CommentList from './commentList';
import '../../style/wrap.less';

@connect(mapStateToProps, mapDispatchToProps)
export default class CommentApp extends Component {
  static propTypes = {
    initComments: PropTypes.func
  };
  static defaultProps = {
    initComments: () => {}
  };

  constructor () {
    super();
    this.state = {};
  }

  componentWillMount () {
    const comment = JSON.parse(window.localStorage.getItem('comments')) || [];
    this.props.initComments(comment);
    this.interval = window.setInterval(() => {
      const comment = JSON.parse(window.localStorage.getItem('comments')) || [];
      this.props.initComments(comment);
    }, 5000);
  }

  componentWillUnmount () {
    window.clearInterval(this.interval);
  }

  render () {
    return (
      <article className="content-app">
        <CommentInput/>
        <CommentList/>
      </article>
    );
  }
}
