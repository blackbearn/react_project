/**
 * Created by Admin on 2017/6/13.
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import About from './about';
import Other from './other';
import List from './list';
import App from './app';
import '../style/main.less';

export default class ReactRouter extends Component {
  render () {
    return (
      <Route render={({ location }) => (
        <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <div key={location.key}>
            <Switch>
              <Route location={location} path="/list" component={List}/>
              <Route location={location} render={() => (
                <App>
                  <Route location={location} exact path="/about" component={About}/>
                  <Route location={location} path="/other" render={(...props) => (
                    <Other {...props}/>
                  )}/>
                  <Route location={location} path="/fuck" render={() => (
                    <Redirect to="/list"/>
                  )}/>
                </App>
              )}/>
            </Switch>
          </div>
        </CSSTransitionGroup>
      )}/>
    );
  }
}
