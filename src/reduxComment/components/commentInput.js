/**
 * Created by Administrator on 2017/6/6.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import '../../style/commentInput.less';

@connect(mapStateToProps, mapDispatchToProps)
export default class CommentInput extends Component {
  static propTypes = {
    commentAction: PropTypes.object
  };
  static defaultProps = {
    commentAction: () => {}
  };

  constructor () {
    super();
    this.state = {
      comment: {
        name: '',
        text: '',
        date: ''
      },
      nameWarning: '',
      textWarning: ''
    };
  }

  componentDidMount () {
    this.input.focus();
  }

  handleClick () {
    if (!this.state.comment.name) {
      this.setState({
        nameWarning: true
      });
    }
    if (!this.state.comment.text) {
      this.setState({
        textWarning: true
      });
    }
    if (this.state.comment.name && this.state.comment.text) {
      this.setState({
        nameWarning: false,
        messageWarning: false,
        comment: {
          text: this.state.comment.text,
          name: this.state.comment.name,
          date: new Date().getTime()
        }
      }, () => {
        this.props.commentAction.addComment(this.state.comment);
        this.setState({
          comment: {
            name: '',
            text: '',
            date: ''
          },
          nameWarning: false,
          messageWarning: false
        });
      });
    }
  }

  render () {
    return (
      <section className="commentInput">
        <div>
          <label htmlFor="name">用户名：</label>
          <input ref={input => this.input = input} type="text" name="name" id="name" value={this.state.comment.name} onChange={e => {
            this.setState({
              comment: {
                name: e.target.value,
                text: this.state.comment.text
              }
            });
          }}/>
          <p className="warning" style={{ display: this.state.nameWarning ? 'block' : 'none' }}>用户名不能为空</p>
        </div>
        <div>
          <label htmlFor="text">评&nbsp;论：</label>
          <textarea name="text" id="text" rows="5" value={this.state.comment.text} onChange={e => {
            this.setState({
              comment: {
                name: this.state.comment.name,
                text: e.target.value
              }
            });
          }}/>
          <p className="warning" style={{ display: this.state.textWarning ? 'block' : 'none' }}>评论内容不能为空</p>
        </div>
        <div>
          <button onClick={this.handleClick.bind(this)}>发布</button>
        </div>
      </section>
    );
  }
}
