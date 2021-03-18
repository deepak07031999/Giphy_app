import React from 'react'
import Register from './Register'
import { useHistory } from "react-router-dom";

export default function Home2() {
    const history = useHistory();
    if (localStorage.getItem('isAuthenticated') === 'true') {
        history.push('/');
      }
    return (
        <div class="home-main">
            <div class="option">
            <a href="/login" class="btn btn-secondary" style={{width:"14rem"}}>Login</a>
            <a href="/register" class="btn btn-primary" style={{width:"14rem",margin:"20px"}}>Register</a>
            </div>
            <div class="register">
                <Register/>
            </div>
            
        </div>
    )
}
