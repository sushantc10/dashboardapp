import React from 'react';
class CreateProjectForm extends React.Component{
	constructor(){
		super()
		this.submitProject = this.submitProject.bind(this);
	}
	submitProject(){
		let data = {
			
		}	
		console.log(data);	
		fetch('https://desolate-chamber-93321.herokuapp.com/saveProject',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				projname:this.projname.value,	
				projdesc:this.projdesc.value,	
				projform:this.projform.value,
				reminder:this.reminder.value,
				username:this.username.value,
				symbol:this.symbol.value
			})
		})
		.then(response =>this.projectForm.reset())
	}

render(){
	return (		
	<div className="side-body">
				<div className="container create-proj">
        	<form ref={(input)=>this.projectForm = input}>
		  <div className="form-group">		    
		    <input type="text" ref={(input) => this.projname = input} className="form-control" id="projectschool" placeholder="Project Name" required/>
		  </div>
		  <div className="form-group">
		    <label htmlFor="exampleFormControlTextarea1">Description (2000)</label>
		    <textarea ref={(input) => this.projdesc = input} className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
		  </div>
		  <div className="form-row">
		    <div className="form-group col-md-6">
		      <label htmlFor="inputState">Select Form(s)</label>
		      <select  ref={(input) => this.projform = input} defaultValue="" id="inputState" className="form-control" required>
		        <option value ="" selected></option>
		        <option value="1">Form XYZ</option>
		        <option value="2">Form MNO</option>
		        <option value="3">Form XYW</option>
		        <option value="4">Form PQR</option>
		        <option value="5">Form ABC</option>
		        <option value="6">Form QWERTY</option>
		      </select>
		    </div>
		    <div className="form-group col-md-4">
		      <label htmlFor="inputState">&nbsp;</label>
		      <select  ref={(input) => this.reminder = input} defaultValue="" id="inputState" className="form-control" required>
		        <option value="" selected>Choose...</option>
		        <option value ="1">1</option>
		        <option value ="2">2</option>
		        <option value ="3">3</option>
		        <option value ="4">4</option>
		        <option value ="5">5</option>
		        <option value ="6">6</option>
		      </select>
		    </div>
		  </div>
		   <div className="form-row">
		  <div className="form-group  col-md-4">
		    <label htmlFor="exampleFormControlSelect2">Assign Users</label>
		    <select  ref={(input) => this.username = input} defaultValue="" className="form-control" id="exampleFormControlSelect2" required>
		      <option value=""></option>
		      <option value="1">Virat Kohli</option>
		      <option value="2">Suresh Raina</option>
		      <option value="3">Ajinkya Rahane</option>
		      <option value="4">MS Dhoni</option>
		    </select>
		  </div>
		  </div>
		  <div className="form-row">
		  <div className="form-group  col-md-4">
		    <label htmlFor="exampleFormControlSelect2">Symbol</label>
		    <select  ref={(input) => this.symbol = input} defaultValue=""  className="form-control" id="exampleFormControlSelect2" required>
		      <option value=""></option>
		      <option value="point">point</option>
		      <option value="polygon">polygon</option>
		      <option value="circle">circle</option>
		      <option value="square">square</option>
		    </select>
		  </div>
		  </div>
		  <div className="form-row">
		  <div className="form-group col-md-2">
		    <button type="button" className="btn btn-light">CANCEL</button>
		  </div>
		  <div className="form-group col-md-3">
		    <button type="button" onClick={this.submitProject} className="btn btn-dark">CREATE PROJECT</button>
		  </div>
		  </div>
		  
		</form>
		</div>
		</div>
	)
}
	
}   
export default CreateProjectForm;