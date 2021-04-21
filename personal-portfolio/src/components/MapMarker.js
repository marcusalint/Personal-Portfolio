import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {MapMarkerStyles} from './MapMarkerStyles.js';

export default class MyGreatPlace extends Component {
  // static propTypes = {
  //   text: PropTypes.string
  // };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={MapMarkerStyles}>
          {this.props.text}
       </div>
    );
  }
}