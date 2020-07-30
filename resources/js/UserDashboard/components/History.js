import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Order from './Order';

class History extends Component{
    constructor(props){
        super(props)
        this.state ={orders:[],}
    }

      componentDidMount(){
   axios.get("http://localhost:8000/getuserorders")
     .then(response => {
             this.setState({
                             orders:response.data,

                            });
        })
        .catch(error => {
            console.log(error)
        });
    }

    render(){
       return (
        <div className="row">
             {
                 this.state.orders.map(i =><Order key={i.id} order={i} />)
             }

          </div>
           )
    }

}
export default History;
