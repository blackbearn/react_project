/**
 * Created by Admin on 2017/6/14.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Img from '../pageImage/1.jpg';
import '../style/wrap.less';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.array
  };

  render () {
    return (
      <article className="content-app">
        <header>
          <Link to="/about">about</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/other">other</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/fuck">fuck</Link>
        </header>
        <section>
          <img src={Img} alt=""/>
          {this.props.children}
        </section>
      </article>
    );
  }
}
