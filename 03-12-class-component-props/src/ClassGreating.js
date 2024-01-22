
import React, { Component } from 'react';

class ClassGreeting extends Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <p>Hello, {name}!</p>
      </div>
    );
  }
}

export default ClassGreeting;
