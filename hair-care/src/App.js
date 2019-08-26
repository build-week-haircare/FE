import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Logo from '../src/haircare.png';
import HairStylistMainPage from './components/HairStylistPage/HairStylistMainPage';
import HairStylistPortfolio from './components/HairStylistPortfolioPage/HairStylistPortfolio';
import HairStylistStylesPage from './components/HairStylistPortfolioPage/HairStylistStylesPage';

function App() {
  return (
    <div className="App ">
      <img src={Logo} alt="hair logo" />

      <Route exact path={`/`} component={HairStylistMainPage} />
      <Route path={`/portfolio`} component={HairStylistPortfolio} />
      <Route path={`/stylespage`} component={HairStylistStylesPage} />
      <Route path="/hairstylistpage" component={HairStylistStylesPage} />
    </div>
  );
}

export default App;
