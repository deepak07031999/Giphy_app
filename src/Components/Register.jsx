import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

export default function Register() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const giphy = [];
    const [image, setImage] = useState();
    const RegisterSubmit = () => {
        const registerData = { name, username, password, email, image, giphy };
        axios.post('http://localhost:3100/users', registerData, {
            headers: { 'Content-Type': 'application/json' }
        })
        history.push('/login')
    }

    return (
        <div div style={{ width: "23rem" }}>
            <div className="container mt-3">
                <h2>Register</h2>
                <div className="row mt -3">
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="mb-3">
                                <input type="text" placeholder="Enter your name" className="form-control"
                                    onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Enter your username" className="form-control"
                                    onChange={(e) => { setUserName(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <input type="password" placeholder="Enter your password" className="form-control"
                                    onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Enter your email" className="form-control"
                                    onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Enter Image Url"
                                    onChange={(e) => { setImage(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary"
                                onClick={RegisterSubmit}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

