/**
 * Created by Admin on 2017/6/13.
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import About from 'bundle-loader?lazy&name=[name]!./about';
import Other from 'bundle-loader?lazy&name=[name]!./other';
import List from 'bundle-loader?lazy&name=[name]!./list';
import App from './app';
import Bundle from './bundle.js';
import '../style/main.less';

const ListContain = () => (
  <Bundle load={List}>
    {(ListContain) => <ListContain />}
  </Bundle>
);

const OtherContain = () => (
  <Bundle load={Other}>
    {(OtherContain) => <OtherContain />}
  </Bundle>
);

const AboutContain = () => (
  <Bundle load={About}>
    {(AboutContain) => <AboutContain />}
  </Bundle>
);

export default class ReactRouter extends Component {
  render () {
    return (
      <Route render={({ location }) => (
        <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <div key={location.key}>
            <Switch>
              <Route location={location} path="/list" component={ListContain}/>
              < Route location={location} render={() => (
                <App>
                  <Route location={location} exact path="/about" component={AboutContain}/>
                  <Route location={location} path="/other" component={OtherContain}/>
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
