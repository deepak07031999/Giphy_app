import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from './component/Dashboard';
import ReadNow from './component/ReadNow';
import Login from './component/Login';
import PrivateRoute from './PrivateRoute';

class App extends React.Component{
  render(){
    return (
    <Router>
    <Header/>
    <Switch>
      <PrivateRoute exact path="/"  component={Dashboard}/>
      <PrivateRoute  path="/readnow"  component={ReadNow}/>
      <Route path="/login" component={Login}></Route>
    </Switch>
    <Footer/>
    </Router>
   
    )
   
  }
}
export default App;
