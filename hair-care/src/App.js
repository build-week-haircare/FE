import React from 'react';
import './App.css'; 
import LoginForm from './components/Login'
import RegisterForm from './components/Register'
import {Route ,BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'
import HairStylist from './components/HairStylist'

function App({isLoggedIn ,isRegister}) {

  const isUserLoggedIn = isLoggedIn || localStorage.getItem('token') !== null 
  const isUserRegister = isRegister || localStorage.getItem('token') !== null

  return (  
    <Router>
    <div className="App">
      {isUserLoggedIn ? <Route exact path = "/" component = {HairStylist}/> : <Route exact path = "/" component = {LoginForm}/> } 
      {isUserRegister ?  <Route path = "/reg" component = {HairStylist} /> : <Route exact path = "/reg" component ={RegisterForm} /> }
      
    </div>
    </Router>
   
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);
