import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { ...props } = this.props;
    
    return <input { ...props } />
  };
}

export default Input;
