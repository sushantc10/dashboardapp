import React from 'react';
import favicon from '../download.jpg';

const Dashboard = ({changeRoute}) => {
	let Location = "";
	//for(let i = 0 ;i < imageResultCount;i++){
	//	Location += <div className='bounding-box' style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}></div>
	//}
	return (
	<div className="row">
	    <div className="side-menu">
	        <nav className="navbar navbar-default" role="navigation">
		        <div className="side-menu-container">
		            <ul className="nav navbar-nav">
		            	<li>
		            		<div align="center">
		            			<img src={favicon} className="img-circle" style={{height:150}} alt="Cinque Terre"/>
		            		</div>
		            	</li>
		                <li><a href="#" onClick={()=>{changeRoute('/project')}}><span className="glyphicon glyphicon-send"></span>Projects</a></li>
		                <li><a href="#" onClick={()=>{changeRoute('/create')}}><span className="glyphicon glyphicon-cloud"></span>Create New Project</a></li>
		                
		            </ul>
		        </div>
		    </nav>    
		</div>
	</div>
	)
}
   
export default Dashboard;