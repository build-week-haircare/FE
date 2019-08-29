import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Registration from './components/Registration/Registrastion'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/registration' component={Registration} />
        
      </Router>
    </div>
  );
}

export default App;
