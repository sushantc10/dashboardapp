import React, { Component } from 'react';
import NavTab from './NavTab';
import FormsTab from './Tabs/FormsTab';
import UsersTab from './Tabs/UsersTab';
class FormsList extends Component {
	constructor(){
		 super();
		 this.renderListing = this.renderListing.bind(this);
	}
	renderListing(){
		let list = this.props.formData;
		let listArr = [];
		console.log(list);
		for(let i = 0; i< list.length;i++){
			listArr.push(<tr>
				      <td scope="row">{i+1}</td>
				      <td>{list[i].name}</td>
				      <td>{list[i].shape}</td>
				      <td>{list[i].reminder}</td>
				    </tr>
	    	);
		}
		return listArr;
	}
render(){
	return (		
		<div className="container-fluid">
			<div className="side-body">
		        	<NavTab/>
		  			<br/>
				<div className="tab-content">
		   			<FormsTab renderListing={this.renderListing}/>  
		   			<UsersTab/>  
		  		</div>
	  		</div>
    	</div>
	)
}
	
}
   
export default FormsList;