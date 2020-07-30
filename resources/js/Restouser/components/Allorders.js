import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Pagination from 'react-js-pagination'
import AlertMessage from './AlertMessage';

class Allorders extends Component{
    constructor(){
        super()
      this.handlePageChange=this.handlePageChange.bind(this);
        this.state={
            Data:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:3,
            alert_message:'',
            restName:''
        }}
    componentDidMount(){
   axios.get("http://localhost:8000/myorders")
     .then(response => {
             this.setState({
                             Data:response.data.data,
                             activePage:response.data.current_page,
                             itemsCountPerPage:response.data.per_page,
                             totalItemsCount:response.data.total
                            });
        })
        .catch(error => {
            console.log(error)
        });
    }
        handlePageChange(pageNumber) {
        // console.log(`active page is ${pageNumber}`);
         //this.setState({activePage: pageNumber});
         axios.get("http://localhost:8000/myorders?page="+pageNumber)
         .then(response=>{
              this.setState({
                                     Data:response.data.data,
                                     activePage:response.data.current_page,
                                     itemsCountPerPage:response.data.per_page,
                                     totalItemsCount:response.data.total
                                 });
         }).catch(error => {
             console.log(error)
         });}




    render(){
        return (
             <div>
         {this.state.alert_message == 'success' ? <AlertMessage message={'Added with successfully'}/>:null}
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Restaurant</th>
            <th scope="col">Adress</th>
            <th scope="col">Quantity</th>
            <th scope="col">Created at</th>
            <th scope="col">Etat</th>
          </tr>
        </thead>
        <tbody>


        {
            this.state.Data.map((data,i) =>{
                      return (
                           <tr key={i}>
                                <td key={i+1}>{i}</td>
                                <td key={i+3}>{data.restoname}</td>
                                <td key={i+7}>{data.adress}</td>
                                <td key={i+8}>{data.quantity}</td>
                                <td key={i+4}>{data.created_at}</td>
                                <td key={i+6}>
                                {data.etat=='Not valid'?
                                <p style={{color:'red'}}>Wait...</p>:
                                <p style={{color:'green'}}>Accept</p>}</td>
                           </tr>)
                      })
        }

        </tbody>
      </table>
      <div className="d-flex justify-content-center">
      <Pagination
      activePage={this.state.activePage}
      itemsCountPerPage={this.state.itemsCountPerPage}
      totalItemsCount={this.state.totalItemsCount}
      pageRangeDisplayed={this.state.pageRangeDisplayed}
      onChange={this.handlePageChange}
      itemClass='page-item'
      linkClass='page-link'
    />
    </div>
     </div>
        )
    }
}

export default Allorders;
