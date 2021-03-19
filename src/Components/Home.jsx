import React from 'react'
import Login from './Login'
import { useHistory } from "react-router-dom";
export default function Home() {

    const history = useHistory();

    if (localStorage.getItem('isAuthenticated') === 'true') {
        history.push('/');
    }

    return (
        // <div class="home-main">
        //     <div class="option">
        //     <a href="/login" class="btn btn-primary">login</a>
        //     <a href="/register" class="btn btn-secondary">register</a>
        //     </div>
        //     <div class="login">
        //         <Login/>
        //     </div>
        //     {/* <div class="register">
        //         <Register/>
        //     </div> */}

        // </div>
        <div>
            <div class="home-main">
                <div class="option">
                    <a href="/login" class="btn btn-primary" style={{ width: "10rem" }}>Login</a>
                    <a href="/register" class="btn btn-secondary" style={{ width: "10rem", margin: "20px" }}>Register</a>
                </div>
                <div class="login">
                    <Login />
                </div>
            </div>
            <div className="home-giphy">   
            <img  className="myimg-2" src="https://media.giphy.com/media/1oDsJobSjjdHxoLxZv/giphy.gif"/>
            </div>
        </div>
    )
}
