import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './Components/Menu';
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardHeader from './Components/Dashboard/DashboardHeader';
import CreateNewProject from './Components/CreateProject/CreateNewProject';

class App extends Component {

  constructor(){
    super();
    this.state = {
      pathname: ""
    }
  }
  changeRoute = (path)=>{
    this.setState({pathname:path});
    console.log(this.state.pathname);
  }
  render() {
    const {pathname} = this.state;
    if(pathname == "" || pathname == "/project"){
      return (
        <div className="row" >
          <Menu changeRoute={this.changeRoute}/>          
          <Dashboard changeRoute={this.changeRoute}/>
        </div>
      );
    }else if( pathname == "/create"){
       return (
        <div className="row" >
          <Menu changeRoute={this.changeRoute}/>
          <CreateNewProject/>
        </div>
      );
    }
    
  }
}

export default App;
