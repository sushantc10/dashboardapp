import React from 'react';

class Dashboard extends React.Component{
	constructor(){
			super();
	}
	
	renderDashboard(details){
		const dash = details;
		let finalArray = []
			for (var i = 0; i < dash.length; i++){
				finalArray.push(<div onClick={this.props.loadProject} data-id={dash[i].id} className="card ">
					<div  className="card-header text-white bg-primary">
						{dash[i].project}
					</div>
					<div  className="card-body">
						<table className="table_">
							<tr>
								<td>
									<h2>{dash[i].formsubmitted}</h2>
								</td>
								<td>
									Number of forms
								</td>
							</tr>
							<tr>
								<td>
									<h2>{dash[i].count_}</h2>
								</td>
								<td>
									Number of people
								</td>
							</tr>
						</table>
						
					</div>
				</div>
				)
			}
			if(finalArray.length>0){
				return (
					finalArray
				)
			}else{
				return(<div className="card ">
					<div  className="card-body">
						<table className="table_">
							<tr>								
								<td>
									Project not available...
								</td>
							</tr>
							
						</table>
						
					</div>
				</div>)
			}
			
	}
	render(){
	return (		

		<div className="container-fluid">
		
	        <div className="side-body"> 
	        	<div className="scroll_">				
	        		{this.renderDashboard(this.props.projectData)}
				</div>
	        </div>
    	</div>
	)
}
}
   
export default Dashboard;