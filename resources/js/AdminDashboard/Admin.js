import React from 'react';
import ReactDOM from 'react-dom';

function Admin() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                 <h1>welcome Admin....</h1>
                </div>
            </div>
    );
}

export default Admin;

if (document.getElementById('Admin')) {
    ReactDOM.render(<Admin />, document.getElementById('Admin'));
}
