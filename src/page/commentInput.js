/**
 * Created by Admin on 2017/6/2.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import '../style/commentInput.less'

export default class CommentInput extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    onSubmit: () => {
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      message: '',
      nameWarning: false,
      messageWarning: false,
      submitTime: '',
      title: '<span>发表评论</span>'
    }
  }

  componentDidMount () {
    this.input.focus()
  }

  handleClick () {
    if (!this.state.name) {
      this.setState({
        nameWarning: true
      })
    }
    if (!this.state.message) {
      this.setState({
        messageWarning: true
      })
    }
    if (this.state.name && this.state.message) {
      this.setState({
        nameWarning: false,
        messageWarning: false,
        submitTime: new Date().getTime()
      }, () => {
        this.props.onSubmit(this.state)
        this.setState({
          name: '',
          message: '',
          nameWarning: false,
          messageWarning: false,
          submitTime: '',
          title: '<span>发表评论</span>'
        })
      })
    }
  }

  render () {
    return (
      <section className="commentInput">
        <h3 dangerouslySetInnerHTML={{__html: this.state.title}}/>
        <div>
          <label htmlFor="name">用户名：</label>
          <input ref={(input) => this.input = input} type="text" name="name" id="name" value={this.state.name} onChange={e => {
            this.setState({
              name: e.target.value
            })
          }}/>
          <p className="warning" style={{display: this.state.nameWarning ? 'block' : 'none'}}>用户名不能为空</p>
        </div>
        <div>
          <label htmlFor="message">评&nbsp;论：</label>
          <textarea name="message" id="message" rows="5" value={this.state.message} onChange={e => {
            this.setState({
              message: e.target.value
            })
          }}/>
          <p className="warning" style={{display: this.state.messageWarning ? 'block' : 'none'}}>评论内容不能为空</p>
        </div>
        <div>
          <button onClick={this.handleClick.bind(this)}>发布</button>
        </div>
      </section>
    )
  }
}
