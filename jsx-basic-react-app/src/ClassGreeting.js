import React from 'react';

class ClassGreeting extends React.Component {
    render() {
        return <div>
            <h1>Class Greeting</h1>
            <p>Hello, {this.props.name}</p>
            <h2>The time is {new Date().toLocaleTimeString()}.</h2>
            <p>Goodbye, {this.props.name}</p>
            </div>;
    }
}

export default ClassGreeting