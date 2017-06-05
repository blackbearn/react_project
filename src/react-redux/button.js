/**
 * Created by Admin on 2017/6/5.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect, mapStateToProps, mapDispatchToProps } from './connect'

@connect(mapStateToProps, mapDispatchToProps)
export default class Title extends Component {

  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }

  handleClick (color) {
    this.props.onSwitchColor(color)
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, 'red')} style={{color: this.props.themeColor}}>Red</button>
        <button onClick={this.handleClick.bind(this, 'blue')} style={{color: this.props.themeColor}}>Blue</button>
      </div>
    )
  }
}
