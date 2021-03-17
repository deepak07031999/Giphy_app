import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from './Components/Dashboard';
import ReadNow from './Components/ReadNow';
import Login from './Components/Login';
import PrivateRoute from './PrivateRoute';

class App extends React.Component{
  render(){
    return (
    <Router>
    <Header/>
    <Switch>
      <PrivateRoute exact path="/"  component={Dashboard}/>
      <PrivateRoute  path="/favourite"  component={ReadNow}/>
      <Route path="/login" component={Login}></Route>
    </Switch>
    <Footer/>
    </Router>
   
    )
   
  }
}
export default App;
