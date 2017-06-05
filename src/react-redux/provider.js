/**
 * Created by Admin on 2017/6/5.
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.element
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return (
      <article>
        {this.props.children}
      </article>
    )
  }
}
