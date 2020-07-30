import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Pagination from 'react-js-pagination'
import AlertMessage from './AlertMessage';
import Post from './Post'

class Posts extends Component{
    constructor(){
      super()
         this.onChange1 = this.onChange1.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handlePageChange=this.handlePageChange.bind(this);
        this.state={
            t1:'',
            alertMessage:'',
            data:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:3,
            'user':{},
        }

    }

         onChange1(e){
        this.setState({
            t1:e.target.value
        });
    }
          onSubmit(e){
        e.preventDefault();
        const apps = {
            t1:this.state.t1,
        }
             axios.post('http://localhost:8000/addpost',apps)
            .then(res =>{ this.setState({
                alertMessage:'success',
                t1:'',
                    })
            axios.get("http://localhost:8000/getposts")
        .then(response => {
             this.setState({
                             data:response.data.data,
                             activePage:response.data.current_page,
                             itemsCountPerPage:response.data.per_page,
                             totalItemsCount:response.data.total
                            });
        })}
                    )
        }
            componentDidMount(){
   axios.get("http://localhost:8000/getposts")
     .then(response => {
             this.setState({
                             data:response.data.data,
                             activePage:response.data.current_page,
                             itemsCountPerPage:response.data.per_page,
                             totalItemsCount:response.data.total
                            });
        })
        .catch(error => {
            console.log(error)
        });
        axios.get("http://localhost:8000/getauth")
        .then(res=>this.setState({user:res.data}));
    }
            handlePageChange(pageNumber) {
        // console.log(`active page is ${pageNumber}`);
         //this.setState({activePage: pageNumber});
         axios.get("http://localhost:8000/getposts?page="+pageNumber)
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
<div className="row">
     <div className="col-md-5">
     {this.state.alertMessage == 'success' ? <AlertMessage message={'added successfully'}/>:null}
     <form onSubmit={this.onSubmit}>
     <div className="form-group">
    <label>What you have to say...</label>
    <textarea className="form-control" value={this.state.t1}
    onChange={this.onChange1}
    id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Add Post</button>
</form>
</div>
<div className="col-md-6">
   {this.state.data.map(i=><Post post={i} user={this.state.user}/>)}
   <hr />
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
      </div>
           )
           }
}

export default Posts;
