import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from "./forms/LoginForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/LoginForm" component={LoginForm} />
      </Router>
    </div>
  );
}

export default App;
