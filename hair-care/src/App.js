import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Divider } from 'semantic-ui-react';

import Logo from '../src/haircare.png';
import HairStylistPortfolio from './components/HairStylistPortfolioPage/HairStylistPortfolio';
import HairStylistStylesPage from './components/HairStylistPortfolioPage/HairStylistStylesPage';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {
  return (
    <div className="App ">
      <Divider horizontal>
        <img src={Logo} alt="hair logo" />
      </Divider>

      <Route path={`/portfolio`} component={HairStylistPortfolio} />
      <Route path="/hairstylistpage" component={HairStylistStylesPage} />
      <Route path="/portfolio/socialmedia" component={SocialMedia} />
    </div>
  );
}

export default App;
