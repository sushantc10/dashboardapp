import React, { Component } from 'react';

class Forms extends Component {

render(){
	if(!this.props.project){
		return (
				<div className="container-fluid">
				<div className="side-body">
					PLEASE WAIT
				</div>
				</div>
		)
	}
	else{

		let {count_,project,createdon,description,lastupdated} = this.props.project
		return (		
			<div className="container-fluid">
	        <div className="side-body">
	        <br/>
	         <div className="jumbotron">
				  <h5 className="display-5">{project}</h5>
				  <h6 className="display-6">Last update on {lastupdated}</h6>
				  <small><i>Created on {createdon}</i></small>
				  <br/>
				  <small>{description}</small>
				  <br/>
				   <br/>
				  <a href="#" role="button"><strong>View more...</strong></a>
				</div>
	         </div>
	    	</div>
		)
	}
	
}
	
}
   
export default Forms;