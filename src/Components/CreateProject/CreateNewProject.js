import React from 'react';
import ProjectHeader from './ProjectHeader';
import CreateProjectForm from './CreateProjectForm';

class CreateNewProject extends React.Component{

	constructor(){
		super()
	}


render(){
	return (		
		<div className="container-fluid">
		<ProjectHeader/>		
		<CreateProjectForm submitProject={this.submitProject}/>
    	</div>
	)	
}
	
}
   
export default CreateNewProject;