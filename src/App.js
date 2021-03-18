import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from './Components/Dashboard';
import ReadNow from './Components/ReadNow';
import Login from './Components/Login';
import PrivateRoute from './PrivateRoute';
import Register from './Components/Register';
import Home from './Components/Home';
import Home2 from './Components/Home2';

class App extends React.Component{
  render(){
    return (
    <Router>
    {/* <Header/> */}
    <Switch>
      <PrivateRoute exact path="/dashboard"   component={Dashboard}/>
      <PrivateRoute  path="/favourite"  component={ReadNow}/>
      {/* <Route path="/login" component={Login}></Route> */}
      {/* <Route path="/register" component={Register}></Route> */}
      <Route path="/register" component={Home2}></Route>
      <Route path="/login" component={Home}></Route>
      <Route path="/" component={Dashboard}></Route>
    </Switch>
    <Footer/>
    </Router>
    )

  }
}
export default App;
