import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './Home';
import Allorders from './Allorders';
import Posts from './Posts'
import History from './History'
export default function AllRouter(){
    return (

             <Router>
             <Link className="btn btn-outline-primary btn-sm " to="/home">Home</Link>
             <Link className="btn btn-outline-primary btn-sm mx-2 " to="/allorders">All Orders</Link>
             <Link className="btn btn-outline-primary btn-sm mx-2" to="/history">My Orders To Do</Link>
             <Link className="btn btn-outline-primary btn-sm " to="/posts">Posts</Link>

              <hr />

              <Route exact path='/home' component={Home} />
              <Route exact path='/allorders' component={Allorders}/>
              <Route exact path='/posts' component={Posts} />
              <Route exact path='/history' component={History} />
             </Router>
           )
}
