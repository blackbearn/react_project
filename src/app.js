import React, {Component}from 'react';
import CommentApp from './page/commentApp';
// import {PropTypes} from 'prop-types';
// // import {Button, Icon} from 'antd';
// // import Page from './page/page';
// // const imgURL = require('./pageImage/1.jpg');
//
// export default class App extends Component {
//
//   static propTypes = {
//     from: PropTypes.oneOfType([PropTypes.string.isRequired])
//   };
//
//   static defaultProps = {
//     from: 'react 小书'
//   };
//
//   constructor(...args) {
//     super(...args);
//     this.state = {
//       isLiked: false
//     };
//   }
//
//   handleClick() {
//     // this.setState({
//     //   isLiked: !this.state.isLiked
//     // }, () => {
//     //   console.log(this.state);
//     // });
//     // console.log(this.state);
//     this.setState(preState => {
//       console.log(preState);
//       return {
//         isLiked: !preState.isLiked
//       };
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <h3>{this.props.from}</h3>
//         <button onClick={this.handleClick.bind(this)}>
//           <span>
//             {this.state.isLiked ? '取消' : '点赞'}
//           </span>
//           <span>
//             👍
//           </span>
//         </button>
//       </div>);
//   }
// }

export default class App extends Component {
  render() {
    return (
      <CommentApp>
        <h3 style={{textAlign: 'center'}}>React 论坛</h3>
      </CommentApp>
    );
  }
}
