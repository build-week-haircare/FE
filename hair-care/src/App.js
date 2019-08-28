import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Logo from '../src/haircare.png';
import HairStylistMainPage from './components/HairStylistPage/HairStylistMainPage';
import HairStylistCard from './components/HairStylistPage/HairStylistCard';
import stylists from './components/HairStylistPage/HairStylistImages';


function App() {
  return (
    <div className="App ">
      <img src={Logo} alt="hair logo" />

      <Route exact path={`/`} component={HairStylistMainPage} />
      {/* <Route path ={`/portfolio`} component={HairStylistPortfolio} /> */}

    </div>
  );
}

export default App;