import React from 'react';
const NavTab = () => {
	return (		
		<div className="container-fluid">
	        <ul className="nav nav-tabs" role="tablist">
			    <li className="nav-item">
			      <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
			    </li>
			    <li className="nav-item">
			      <a className="nav-link" data-toggle="tab" href="#menu1">Users</a>
			    </li>
		  	</ul> 
    	</div>
	)
}
   
export default NavTab;