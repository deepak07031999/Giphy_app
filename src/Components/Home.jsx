import React from 'react'
import Login from './Login'
import { useHistory } from "react-router-dom";
import GuestHeader from './GuestHeader';
export default function Home() {
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
                        <a href="/login" className="btn btn-primary" style={{ width: "10rem" }}>Login</a>
                        <a href="/register" className="btn btn-secondary" style={{ width: "10rem", margin: "20px" }}>Register</a>
                    </div>
                    <div className="login">
                        <Login/>
                    </div>
                </div>
                <div className="home-giphy">
                    <img className="myimg-2" src="https://media.giphy.com/media/1oDsJobSjjdHxoLxZv/giphy.gif"alt=""/>
                </div>
            </div>
        </div>
    )
}

