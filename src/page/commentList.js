/**
 * Created by Admin on 2017/6/2.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Comment from './comment'
import '../style/commentList.less'

export default class CommentList extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired
  }

  static defaultPropTypes = {
    list: []
  }

  render () {
    return (
      <section>
        <h3>评论列表</h3>
        <ul>
          {
            this.props.list.map((json, index) => {
              return <Comment json={json} key={index}/>
            })
          }
        </ul>
      </section>
    )
  }
}
