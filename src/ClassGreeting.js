import React from 'react';

class ClassGreeting extends React.Component {

    render() {
        const { name } = this.props;
    return (
        <div>
            Hallo, {name}!
        </div>
      );

   }
}

export default ClassGreeting;