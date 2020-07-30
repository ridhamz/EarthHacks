import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import AllRouter from './components/Router';

export default function Rest(){
 return (
     <div className="container">
     <AllRouter />
     </div>
 );
}

if (document.getElementById('Resto')) {
    ReactDOM.render(<Rest />, document.getElementById('Resto'));
}
