/**
 * Created by Admin on 2017/6/2.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import commentHoc from './commentHOC'

class Comment extends Component {

  static propTypes = {
    json: PropTypes.object,
    time: PropTypes.string,
    title: PropTypes.string
  }

  static defaultProps = {
    json: {}
  }

  replaceCode (content) {
    return content.replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  render () {
    return (
      <div>
        <p dangerouslySetInnerHTML={{
          __html: this.replaceCode(this.props.json.message)
        }}/>
        <p style={{textAlign: 'right'}}>
          <span>{this.props.json.name}，{this.props.title}</span>
          &nbsp;&nbsp;&nbsp;
          <span>发表于{this.props.time}前</span>
        </p>
      </div>
    )
  }
}

export default commentHoc(Comment)('评论')
