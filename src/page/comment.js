/**
 * Created by Admin on 2017/6/2.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Comment extends Component {

  static propTypes = {
    json: PropTypes.object
  }

  static defaultProps = {
    json: {}
  }

  render () {
    let timeCount = (new Date().getTime() - this.props.json.submitTime) / 1000
    timeCount = timeCount < 60 ? `${Math.ceil(timeCount)}秒` : `${Math.ceil(timeCount / 60)}分钟`
    return (
      <li>
        <p>{this.props.json.message}</p>
        <p style={{textAlign: 'right'}}>
          <span>{this.props.json.name}</span>
          &nbsp;&nbsp;&nbsp;
          <span>发表于{timeCount}前</span>
        </p>
      </li>
    )
  }
}
