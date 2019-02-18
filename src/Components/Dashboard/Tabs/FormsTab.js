import React from 'react';
const FormsTab = ({renderListing}) => {

	return (		
	        <div id="home" className="container tab-pane active">
	        		
				  	<form className="form-inline ">
						  <div className="form-group mb-6 form__">					    
						    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">ADD NEW FORMS TO PROJECT</button>
						  </div>
						  <div className="form-group mx-sm-3 mb-6 form__">					    
						    <div className="input-group-prepend">
							    <span className="input-group-text" id="basic-addon1">@</span>
							  </div>
							  <input type="text" className="form-control" placeholder="Search Forms Here" aria-describedby="basic-addon1"/>
						  </div>	  
					</form>
					<br/>
	        	<div className="table">
	        		<form className="form-inline">
					  <div className="form-group mb-2">					    
					    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
					    <label className="form-check-label" for="defaultCheck1">
						    Select All
						  </label>
					  </div>
					  <div className="form-group mx-sm-3 mb-2">					    
					    <input type="button" className="form-control" value="Refresh" id="inputPassword2" placeholder="Refresh"/>
					  </div>
					  <div className="form-group mx-sm-3 mb-2">					    
					    <input type="button" className="form-control" value="Filter" id="inputPassword2" placeholder="Refresh"/>
					  </div>					  
					</form>
	        	</div>
			      <table className="table table-condensed">
					  <thead className="thead-light">
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Forms</th>
					      <th scope="col">Shape</th>
					      <th scope="col">Reminder</th>
					    </tr>
					  </thead>
					  <tbody>
					  {renderListing()}					   
					  </tbody>
					</table>
    </div>
	)
}
   
export default FormsTab;