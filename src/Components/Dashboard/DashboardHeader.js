import React from 'react';
const CreateNewProject = ({changeRoute,searchProject}) => {
	let Location = "";
	return (	
	<div className="container-fluid">	
		<nav className="navbar navbar-expand-lg navbar-light bg-light side-body">
  <a className="navbar-brand" href="#">Dashboard</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

    </ul>
    <form className="form-inline my-2 my-lg-0 justify-content-end">
      <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Refresh</a>
      <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Filter</a>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={(event)=>{searchProject(event)}} aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={()=>{changeRoute('/create')}}>Create New Project</button>
    </form>
  </div>
</nav>
</div>	
	)
}
   
export default CreateNewProject;