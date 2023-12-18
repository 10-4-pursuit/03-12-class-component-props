import React from 'react';

class ClassGreeting extends React.Component {
    render() {
        return <div>Hey, {this.props.name}!</div>
    }
}

export default ClassGreeting;