import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

export default function Login() {
    const history = useHistory();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const LoginSubmit = () => {
        axios
            .get('http://localhost:3100/users')
            .then((response) => {
                let flag = 0;
                for (let i = 0; i < response.data.length && !flag; i++) {
                    if (response.data[i].username === username) {
                        if (response.data[i].password === password) {
                            flag = 1;
                            localStorage.setItem('token', "token");
                            localStorage.setItem('username', username);
                            localStorage.setItem('isAuthenticated', true);
                            history.push(`/dashboard`)
                        }

                        else {
                            alert("Wrong password login again")
                            console.log("wrong")
                            history.push("/login")
                        }
                    }
                }
                if (flag === 0) {
                    alert("Wrong user login again")
                    console.log("wrong")
                    history.push("/login")
                }
            })
            .catch((error) => {
                console.log("error searching data base for users")
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

