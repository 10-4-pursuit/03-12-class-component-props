import React from "react";

class ClassGreeting extends React.Component {
    render() {
        return <div>
            <h2>Holiday, Greetings from React!</h2>
            <p>Hello there, welcome {this.props.name}.</p>
            <h2>Merry Christmas!</h2>
            <p>Hope you have a wonderful holiday season! From the react family to yours.</p>
        </div>
    };
};

export default ClassGreeting;