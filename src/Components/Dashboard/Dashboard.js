import React, { Component } from 'react';
import {data} from '../../backend/data';
import Project from './Project';
import Forms from './Forms';
import FormsList from './FormsList';
import DashboardHeader from './DashboardHeader';
//import './FaceRecognition.css';FormsList

class Dashboard extends Component {
	constructor(){
		 super();
		 this.state={
		 	data:"",
		 	forms:"",
		 	projData:"",
		 	searchProject:""
		 }
		 this.loadProject = this.loadProject.bind(this);
		 this.searchProject = this.searchProject.bind(this);
		 
	}
	componentDidMount(){
		fetch('https://desolate-chamber-93321.herokuapp.com/getallprojects',{
          method:'get',
          headers:{'Content-Type':'application/json'}
        })
      .then(response => response.json())
      .then(response => {
      	this.setState({data:response[0].data})
      	this.setState({projData:response[0].data[0]})      
      	console.log(this.state.projData);
      	 if(response){
            fetch('https://desolate-chamber-93321.herokuapp.com/getProjectForms/'+response[0].data[0].id+'/',{
              method:'get',
              headers:{'Content-Type':'application/json'},
            })
            .then(response => response.json())
            .then(response2 => {
             // this.setState(Object.assign(this.state.user,{entries:count}));
             this.setState({forms:response2[0].form})
            })
            .catch(console.log)
          }
      })

	}
	loadProject(event){
		//console.log(event.currentTarget.dataset.id);
		fetch('https://desolate-chamber-93321.herokuapp.com/loadSelectedProject/'+event.currentTarget.dataset.id+'/',{
          method:'get',
          headers:{'Content-Type':'application/json'}
        })
      .then(response => response.json())
      .then(response => {

      	if(response){
      		this.setState({projData:response[0].data[0]}) 
      		console.log(this.state.projData);
      		//console.log(this.state.projData);     
            fetch('https://desolate-chamber-93321.herokuapp.com/getProjectForms/'+response[0].data[0].id+'/',{
              method:'get',
              headers:{'Content-Type':'application/json'},
            })
            .then(response => response.json())
            .then(response2 => {
             // this.setState(Object.assign(this.state.user,{entries:count}));
             this.setState({forms:response2[0].form})
            })
            .catch(console.log)
          }
      })
	}
	searchProject(event){
		let api_ = "getProject/"+event.target.value+'/';
		if(!event.target.value.split(' ').join('')){
			api_ = "getallprojects";
		}
			console.log(event.target.value.split(' ').join(''))
			fetch('https://desolate-chamber-93321.herokuapp.com/'+api_,{
	          method:'get',
	          headers:{'Content-Type':'application/json'}
	        })
	      .then(response => response.json())
	      .then(response => {
	      	this.setState({data:response[0].data})
	      })
	}
	render() {
		let {changeRoute} = this.props;
		return (		
		<div className="container-fluid">
			<DashboardHeader searchProject={this.searchProject} changeRoute={changeRoute}/>
	        <Project loadProject={this.loadProject} projectData={this.state.data || {}}/>
	        <Forms   project={this.state.projData}/>
	        <FormsList formData={this.state.forms}/>
	    </div>
		)
	}
}
   
export default Dashboard;