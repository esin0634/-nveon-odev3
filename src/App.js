
import './App.css';
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link} from "react-router-dom";

import TutorialsList from './components/tutorial-list.component';
import AddTutorial from './components/tutorial-add.component';
import Tutorial from './components/tutorial.component';

class App extends Component{
  render()
    {
      return(
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <h1 className="navbar-brand" >Inveon</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li><Link to={"/add"} className="nav-link"> Tutorials Add </Link></li>
                  <li><Link to={"/tutorials"} className="nav-link"> Tutorials List </Link></li>
              </ul>
             
            </div>
          </div>
        </nav>

        <div className='container mt-3'>
            <Routes>
              <Route path="/" element= {<TutorialsList/>}></Route>
              <Route path="/tutorials" element= {<TutorialsList/>}></Route>
              <Route path="/add" element= {<AddTutorial/>}></Route>
              <Route path="/tutorials/:id" element= {<Tutorial/>}></Route>
            </Routes>
        </div>


        </div>
      )
    }
  
   
}

export default App;
