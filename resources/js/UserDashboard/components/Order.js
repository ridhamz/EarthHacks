import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default function Home(props){
    return (
        <div className="col-md-3 mx-2 my-2" style={{border:'solid 1px #EEE'}}>
             <h2>Order id :{props.order.id}</h2>
             <h6>Restaurant Name :{props.order.name}</h6>
             <h6>Quantity Food :{props.order.quantity}</h6>
             <h6>Created at :{props.order.created_at}</h6>
             <br></br>

      </div>
           )
}
