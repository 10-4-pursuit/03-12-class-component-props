import React from 'react';

class ClassGreeting extends React.Component {
    render() {
        return <div>Hello, {this.props.name}</div>
    }
}

export default ClassGreeting;