/**
 * Created by Admin on 2017/6/13.
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import About from 'bundle-loader?lazy!./about';
import Other from 'bundle-loader?lazy!./other';
import List from 'bundle-loader?lazy!./list';
import App from './app';
import '../style/main.less';
import Bundle from './bundle';

export default class ReactRouter extends Component {
  render () {
    return (
      <Route render={({ location }) => (
        <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <div key={location.key}>
            <Switch>
              <Route location={location} path="/list" render={() => (
                <Bundle load={List}>
                  {(List) => <List/>}
                </Bundle>
              )}/>
              < Route location={location} render={() => (
                <App>
                  <Route location={location} exact path="/about" render={() => (
                    <Bundle load={About}>
                      {(About) => <About/>}
                    </Bundle>
                  )}/>
                  <Route location={location} path="/other" render={() => (
                    <Bundle load={Other}>
                      {(Other) => <Other/>}
                    </Bundle>
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
