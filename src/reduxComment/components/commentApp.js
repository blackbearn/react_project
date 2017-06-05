/**
 * Created by Admin on 2017/6/2.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CommentInput from './commentInput';
import CommentList from './commentList';
import '../../style/wrap.less';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../store/store';

@connect(mapStateToProps, mapDispatchToProps)
export default class CommentApp extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  constructor () {
    super();
    this.state = {
      comments: []
    };
  }

  componentWillMount () {
    const commentList = JSON.parse(window.localStorage.getItem('comment')) ||
      [];
    this.setState({
      comments: commentList
    });
  }

  handleDelete (index) {
    const commentList = this.state.comments;
    commentList.splice(index, 1);
    this.setState({
      comments: commentList
    }, () => {
      window.localStorage.setItem('comment',
        JSON.stringify(this.state.comments));
    });
  }

  render () {
    return (
      <article className="content-app">
        {this.props.children}
        <CommentInput onSubmit={(val) => {
          const comments = this.state.comments;
          comments.push(val);
          this.setState({
            comments: comments
          }, () => {
            window.localStorage.setItem('comment',
              JSON.stringify(this.state.comments));
          });
        }}/>
        <CommentList list={this.state.comments} onRemove={this.handleDelete.bind(this)}/>
      </article>
    );
  }
}
