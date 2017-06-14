/**
 * Created by Admin on 2017/6/13.
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './about';
import Other from './other';
import List from './list';
import App from './app';
import '../style/main.less';

export default class ReactRouter extends Component {
  render () {
    return (
      <Switch>
        <Route path="/list" component={List}/>
        <Route render={() => (
          <App>
            <Route exact path="/" component={About}/>
            <Route path="/other" render={(...props) => (
              <Other {...props}/>
            )}/>
            <Route path="/fuck" render={() => (
              <Redirect to="/list"/>
            )}/>
          </App>
        )}/>
      </Switch>
    );
  }
}
