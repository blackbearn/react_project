/**
 * Created by Admin on 2017/6/5.
 */
import React from 'react';
import Button from './button';
import { connect, mapStateToProps } from './connect';

// @connect(mapStateToProps)
// export default class Title extends Component {
//   static propTypes = {
//     themeColor: PropTypes.string
//   }
//
//   render () {
//     return (
//       <section>
//         <span style={{color: this.props.themeColor}}>
//           react-redux-content
//         </span>
//         <Button/>
//       </section>
//     )
//   }
// }

const Title = (prop) => {
  return (
    <section>
        <span style={{ color: prop.themeColor }}>
          react-redux-content
        </span>
      <Button/>
    </section>
  );
};

export default connect(mapStateToProps)(Title);
