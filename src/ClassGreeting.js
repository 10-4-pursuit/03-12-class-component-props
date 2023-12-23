import React, { Component } from 'react'

export class ClassGreeting extends Component {
  render() {
    return (
      <div>Welcome to Wonderland, {this.props.name}!</div>
    )
  }
}

export default ClassGreeting