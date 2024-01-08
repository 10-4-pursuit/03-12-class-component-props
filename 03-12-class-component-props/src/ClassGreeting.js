import React from "react";

class ClassGreeting extends React.Component {
    render() {
        const { name } = this.props;

        return <div> <h1> Hello, { name } !</h1> </div>
    }
}

const App = () => {
    return <div>
        <ClassGreeting name = 'John' />
        <ClassGreeting name = 'James' />
        <ClassGreeting name = 'Samuel' />
    </div>
}

export default App;