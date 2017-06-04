/**
 * Created by Admin on 2017/6/2.
 */
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

export default class Comment extends Component {

  static propTypes = {
    json: PropTypes.object
  };

  static defaultProps = {
    json: {}
  };

  constructor() {
    super();
    this.state = {
      timeCal: ''
    };
  }

  componentWillMount() {
    this.calTime();
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.calTime();
    }, 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  calTime() {
    let timeCount = (new Date().getTime() - this.props.json.submitTime) / 1000;
    timeCount = timeCount < 60 ? `${Math.ceil(timeCount)}秒` : `${Math.ceil(timeCount / 60)}分钟`;
    this.setState({
      timeCal: timeCount
    });
  }

  replaceCode(content) {
    return content.replace(/`([\S\s]+?)`/g, '<code>$1</code>');
  }

  render() {
    return (
      <div>
        <p dangerouslySetInnerHTML={{
          __html: this.replaceCode(this.props.json.message)
        }}/>
        <p style={{textAlign: 'right'}}>
          <span>{this.props.json.name}</span>
          &nbsp;&nbsp;&nbsp;
          <span>发表于{this.state.timeCal}前</span>
        </p>
      </div>
    );
  }
}
