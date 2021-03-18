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

class App extends React.Component{
  render(){
    return (
    <Router>
    {/* <Header/> */}
    <Switch>
      <Route exact path="/dashboard/:username"   component={Dashboard}/>
      <Route  path="/favourite/:username"  component={ReadNow}/>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
    </Switch>
    <Footer/>
    </Router>
    )

  }
}
export default App;
