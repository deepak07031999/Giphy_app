import React from 'react'
import Register from './Register'
import { useHistory } from "react-router-dom";
import GuestHeader from './GuestHeader';

export default function Home2() {
    const history = useHistory();
    if (localStorage.getItem('isAuthenticated') === 'true') {
        history.push('/');
    }
    return (
        <div>
            <GuestHeader/>
            <div>
                <div className="home-main">
                    <div className="option">
                        <a href="/login" className="btn btn-secondary" style={{ width: "10rem" }}>Login</a>
                        <a href="/register" className="btn btn-primary" style={{ width: "10rem", margin: "20px" }}>Register</a>
                    </div>
                    <div className="register">
                        <Register />
                    </div>
                    <div className="home-giphy">
                        <img className="myimg-2" src="https://media1.giphy.com/media/3otPorfb8Lu7wjKllm/giphy.gif?cid=c893431agsxa6sc3vrqztma17hm09zeo1nhevixc46ky1wh0&rid=giphy.giff" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
