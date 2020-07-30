import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './Home';
import Addorder from './Addorder';
import Allorders from './Allorders';
export default function AllRouter(){
    return (

             <Router>
             <Link className="btn btn-outline-primary btn-sm " to="/home">Home</Link>
             <Link className="btn btn-outline-primary btn-sm mx-2 " to="/addorder">Add Orders</Link>
             <Link className="btn btn-outline-primary btn-sm mx-2" to="/myorders">Your Orders</Link>


              <hr />

              <Route exact path='/home' component={Home} />
              <Route exact path='/addorder' component={Addorder} />
              <Route exact path='/myorders' component={Allorders} />
             </Router>
           )
}
