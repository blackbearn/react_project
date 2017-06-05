/**
 * Created by Admin on 2017/6/5.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default (HocComponent) => (title) => {
  return class CommentHoc extends Component {
    static propTypes = {
      json: PropTypes.object
    }

    static defaultProps = {
      json: {}
    }

    componentWillMount () {
      this.calTime()
    }

    componentDidMount () {
      this.interval = window.setInterval(() => {
        this.calTime()
      }, 5000)
    }

    componentWillUnmount () {
      window.clearInterval(this.interval)
    }

    constructor () {
      super()
      this.state = {
        timeCal: '',
        title
      }
    }

    calTime () {
      let timeCount = (new Date().getTime() - this.props.json.submitTime) / 1000
      if (timeCount < 60) {
        timeCount = `${Math.ceil(timeCount)}秒`
      }
      if (timeCount / 60 < 60) {
        timeCount = `${Math.ceil(timeCount / 60)}分钟`
      }
      if (timeCount / 60 / 60 < 24) {
        timeCount = `${Math.ceil(timeCount / 60 / 60)}小时`
      }
      if (timeCount / 60 / 60 > 24) {
        timeCount = `${Math.ceil(timeCount / 60 / 60 / 24)}天`
      }
      this.setState({
        timeCal: timeCount
      })
    }

    render () {
      return <HocComponent json={this.props.json} time={this.state.timeCal} title={this.state.title}/>
    }
  }
}
