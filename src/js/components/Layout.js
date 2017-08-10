import React from "react";

import Header from "./Header";
import Footer from "./Footer";


export default class Layout extends React.Component{
constructor(){
	super();
	this.state = {
		title: "sate title in  Layout",
	};
}

changeTitle(title){
	this.setState({title});
}
render(){
 

  return(
    <div>
      <Header title = {"first title in Layout"} />
      
      <Header changeTitle = {this.changeTitle.bind(this)} title = {this.state.title} />
      <Footer />
    </div>
    );
}

}
