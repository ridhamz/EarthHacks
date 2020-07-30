import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                 <h1>This is Home....</h1>
                </div>
            </div>
    );
}

export default Home;

if (document.getElementById('Home')) {
    ReactDOM.render(<Home />, document.getElementById('Home'));
}
