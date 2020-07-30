import React from 'react';
import ReactDOM from 'react-dom';
import AllRouter from './components/Router';

function User() {
    return (
        <div className="container">
            <AllRouter />
        </div>
    );
}

export default User;

if (document.getElementById('User')) {
    ReactDOM.render(<User/>, document.getElementById('User'));
}
