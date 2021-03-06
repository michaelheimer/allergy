import React from "react";

import Title from "./header/Title";

export default class Header extends React.Component{
  handleChange(event)
  {
  	const title = event.target.value;
  	this.props.changeTitle(title);
  }
  render(){
  	return(
  	<div>	
       <Title title = {this.props.title} />
       <input onChange = {this.handleChange.bind(this)} />
     </ div>
  	);
  }

}