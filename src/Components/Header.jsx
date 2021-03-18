import React from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom";
export default function Header(props) {
  const user=props.username;
  const dashboard=`/dashboard`;
  const favourite=`/favourite`;
  const logout=()=>{
    localStorage.setItem('token', null);
    localStorage.setItem('isAuthenticated', false);
  }
    return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to={dashboard} className="navbar-brand" >Giphy App
  </Link>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to={dashboard} className="nav-link" >Dashboard</Link>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to={favourite} className="nav-link">Favourite Giphy</Link>
      </li>
    </ul>
    <ul className="navbar-nav" style={{position:'absolute',right:"1rem"}}>
      <li className="nav-item active">
      <Link to="/login" className="nav-link"
      onClick={()=>{logout();}}
      >
        Logout
        
        <i class="fas fa-sign-out-alt"style={{margin:"0.5rem"}}></i>
        </Link>
      </li>
    </ul>
  </div>
  </nav>
    )
}

