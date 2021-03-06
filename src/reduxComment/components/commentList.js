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
    commentState: PropTypes.object
  };
  static defaultProps = {
    commentState: {}
  };

  constructor () {
    super();
    this.state = {};
  }

  render () {
    return (
      <ul>
        {
          this.props.commentState.comment.map((list, index) => {
            return <Comment json={list} key={index} index={index}/>;
          })
        }
      </ul>
    );
  }
}
