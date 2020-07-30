import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AlertMessage from './AlertMessage';
import axios from 'axios';

class Addorder extends Component{
       constructor(){
        super();
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            t1:'',
            t2: '',
            t3:'',
            alertMessage:''
        }
    }
     onChange1(e){
        this.setState({
            t1:e.target.value
        });
    }
        onChange2(e){
            this.setState({
                t2:e.target.value
            });
    }
       onChange3(e){
            this.setState({
              t3:e.target.value
            });
    }

      onSubmit(e){
        e.preventDefault();
        const apps = {
            t1:this.state.t1,
            t2:this.state.t2,
            t3:this.state.t3,
        }
                axios.post('http://localhost:8000/addorderbyresto',apps)
            .then(res => this.setState({
                alertMessage:'success',
                t1:'',
                t2:'',
                t3:'',
                         }))
                         }


    render(){
    return (
        <div className="row ">
        <div className="col-md-6">
          {this.state.alertMessage == 'success' ? <AlertMessage message={'Order added successfully'}/>:null}
    <h2>Add an Order :</h2>
     <form onSubmit={this.onSubmit}>
  <div className="form-group">
    <label>Adress</label>
    <input type="text" value={this.state.t1}
     onChange={this.onChange1}
    className="form-control" id="exampleInputPassword1" />
  </div>
   <div className="form-group">
    <label>Litle Discription</label>
    <textarea className="form-control" value={this.state.t2}
    onChange={this.onChange2}
    id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    <div className="form-group">
    <label>Quantity</label>
    <input type="text" onChange={this.onChange3}
    value={this.state.t3}
     className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
      </div>
           )}
}
export default Addorder;
