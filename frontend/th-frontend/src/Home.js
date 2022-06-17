import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {

    return (
        <div>
            <h1>Welcome!</h1>
            <Link to='/signup'>Sign Up</Link>
            <br/>
            <Link to='/users'>See Users</Link>
        </div>
    )
}

export default Home;