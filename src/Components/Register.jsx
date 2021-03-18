import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

export default function Register() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [giphy, setGiphy] = useState([]);
    // const [cityname,setCityName] = useState('');

    // const [image,setImage] = useState();



    const RegisterSubmit = () => {
        const registerData = { name, username, password, email, giphy };
        axios.post('http://localhost:3100/users', registerData, {
            headers: { 'Content-Type': 'application/json' }
        })
        history.push('/login')
    }

    return (
        <div>
            <div className="container mt-4">
                <h2>Register</h2>
                <div className="row mt -3">
                    <div className="col-md-8">
                        <div className="form-group">

                            <div className="mb-3">
                                <input type="text" placeholder="Enter your name" className="form-control"
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>

                            <div className="mb-3">
                                <input type="text" placeholder="Enter your username" className="form-control"
                                    onChange={(e) => { setUserName(e.target.value) }}
                                />
                            </div>

                            <div className="mb-3">
                                <input type="text" placeholder="Enter your password" className="form-control"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>

                            {/* <div className="mb-3">
                                <input type="text" placeholder="Enter your cityname" className="form-control"
                                onChange={(e)=>{setCityName(e.target.value)}}
                                />
                            </div> */}
                            
                            <div className="mb-3">
                                <input type="text" placeholder="Enter your email" className="form-control"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                            {/* <div className="mb-3">
                                <input type="file" className="form-control"
                                onChange={(e)=>{setImage(e.target.value)}}
                                />
                            </div> */}
                        </div>
                        {/* <p>Not a User ? Then enter username and password above and click on Register first</p> */}
                        <div>
                            <button type="submit" className="btn btn-primary"
                                onClick={RegisterSubmit}
                            >Register</button>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6 mt-4">
                        <AddContact addContact={saveContact}/>
                </div> */}
            </div>

        </div>
    )
}

