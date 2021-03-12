import React from 'react';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from './Components/dashboad/Dashboard';
import ReadNow from './Component/ReadNow';
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
