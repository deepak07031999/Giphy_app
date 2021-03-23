import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

export default function Login() {
    const history = useHistory();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const LoginSubmit = () => {
        const userData = { username, password };
        //console.log(password);
        axios.post('http://localhost:5000/users/login', userData)
      .then((res) => {
        //console.log(password);
        localStorage.setItem('username', username);
        localStorage.setItem('isAuthenticated', true);
        history.push("/dashboard");
      })
      .catch(err => {
        //console.log(password+"hello");
        alert('Not a valid user');
        //console.log(err)
      })

        
    }
    return (
        <div style={{ width: "23rem" }}>
            <div className="container mt-4">
                <h2>Login</h2>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="mb-3">
                                <input type="text" placeholder="Enter your username" className="form-control"
                                    onChange={(e) => { setUserName(e.target.value) }}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="password" placeholder="Enter your password" className="form-control"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                        </div>
                         <div>
                            <button type="submit" className="btn btn-primary" onClick={LoginSubmit}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

