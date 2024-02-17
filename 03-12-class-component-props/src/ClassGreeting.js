import React, { Component } from 'react';

class ClassGreeting extends Component {
    render() {
        return (
            <div>
                Hello, {this.props.name}!
            </div>
        );
    }
}

export default ClassGreeting;