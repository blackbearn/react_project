/**
 * Created by Admin on 2017/6/2.
 */
import React, { Component } from 'react'
import CommentInput from './commentInput'
import CommentList from './commentList'
import '../style/wrap.less'

export default class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  componentWillMount () {
    const commentList = JSON.parse(window.localStorage.getItem('comment')) || []
    this.setState({
      comments: commentList
    })
  }

  render () {
    return (
      <article>
        <CommentInput onSubmit={(val) => {
          const comments = this.state.comments
          comments.push(val)
          this.setState({
            comments: comments
          }, () => {
            window.localStorage.setItem('comment', JSON.stringify(this.state.comments))
          })
        }}/>
        <CommentList list={this.state.comments}/>
      </article>
    )
  }
}
