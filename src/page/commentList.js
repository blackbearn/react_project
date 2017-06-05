/**
 * Created by Admin on 2017/6/2.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Comment from './comment'
import '../style/commentList.less'

export default class CommentList extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
  }

  static defaultPropTypes = {
    list: []
  }

  componentWillReceiveProps (...arg) {
    console.log(...arg)
  }

  shouldComponentUpdate (...arg) {
    console.log(...arg)
    return true
  }

  componentWillUpdate (...arg) {
    console.log(...arg)
  }

  componentDidUpdate (...arg) {
    console.log(...arg)
  }

  render () {
    return (
      <section>
        <h3 style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>评论列表</span>
          <span>共{this.props.list.length}条评论</span>
        </h3>
        <ul>
          {
            this.props.list.map((json, index) => {
              return (
                <li key={index}>
                  <p style={{textAlign: 'right'}}>
                    <a href="javascript:;" onClick={() => this.props.onRemove(index)}>删除</a>
                  </p>
                  <Comment json={json}/>
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}
