/**
 * Created by Admin on 2017/6/13.
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './about';
import Other from './other';
import List from './list';
import App from './app';

export default class ReactRouter extends Component {
  render () {
    return (
      <Switch>
        <Route path="/list" component={List}/>
        <Route path="/" children={() => (
          <App>
            <Switch>
              <Route exact path="/" component={About}/>
              <Route path="/other" children={(...props) => (
                <Other {...props}/>
              )}/>
              <Route path="/fuck" render={() => (
                <Redirect to="/list"/>
              )}/>
            </Switch>
          </App>
        )}/>
      </Switch>
    );
  }
}
