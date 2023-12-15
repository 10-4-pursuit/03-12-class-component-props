import React, { Component } from "react";


class ClassGreeting extends React.Component {
    render () {
   
          return (
        <h1>Hello, {this.props.name}</h1>   
    ) 
    }
 
}

const element = <ClassGreeting name="Chico" />
function Greeting () {
    return (
        <h1>{element}</h1>
    )
}
export {ClassGreeting, Greeting} 

