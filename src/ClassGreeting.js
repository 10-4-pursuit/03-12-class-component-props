import React from "react";
import "./ClassGreeting.css";

class ClassGreeting extends React.Component{
	render(){
		const { name } = this.props;
		return(
			<div>
				<p className="greeting-text">Hello, {name}!</p>
			</div>
		);
	}
}
export default ClassGreeting;