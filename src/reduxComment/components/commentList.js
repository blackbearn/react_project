/**
 * Created by Administrator on 2017/6/6.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from './comment';
import { mapStateToProps } from '../store/store';
import '../../style/commentList.less';

@connect(mapStateToProps)
export default class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.object
  };
  static defaultProps = {
    comments: {}
  };

  constructor () {
    super();
    this.state = {};
  }

  render () {
    return (
      <ul>
        {
          this.props.comments.comment.map((list, index) => {
            return <Comment json={list} key={index} index={index}/>;
          })
        }
      </ul>
    );
  }
}
