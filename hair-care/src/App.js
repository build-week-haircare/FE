import React, { useState } from "react";
import "./App.css";
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Divider } from 'semantic-ui-react';
import stylistData from '../src/components/Carousel/StylistImageData';

import LoginForm from "./forms/LoginForm";
import Registration from './components/Registration/Registrastion'
import Logo from '../src/haircare.png';
import HairStylistPortfolio from './components/HairStylistPortfolioPage/HairStylistPortfolio';
import HairStylistStylesPage from './components/HairStylistPortfolioPage/HairStylistStylesPage';
import SocialMedia from './components/SocialMedia/SocialMedia';
import HairStylistMainPage from './components/HairStylistPage/HairStylistMainPage';

function App() {
  const [hsImage, setHSImage] = useState(stylistData);
  return (

    <div className="App">
      <Router>
       <Route path="/LoginForm" component={LoginForm} />
      <Route path='/registration' component={Registration} />
      <Divider horizontal>
        <img src={Logo} alt="hair logo" />
      </Divider>

      <Route
        path={`/portfolio`}
        render={props => (
          <HairStylistPortfolio {...props} hairstylist={hsImage} />
        )}
      />

      {/* <Route
        path="/hairstylistpage"
        render={props => <HairStylistStylesPage {...props} stylist={hsImage} />}
      /> */}

      <Route
        path="/hairstylistpage/:stylist_id"
        render={props => (
          <HairStylistStylesPage {...props} stylists={hsImage} />
        )}
      />

      <Route path="/portfolio/socialmedia" component={SocialMedia} />
       <Route exact path={`/`} component={HairStylistMainPage} />
         {/* <Route path ={`/portfolio`} component={HairStylistPortfolio} /> */}      
      </Router>
    </div>
  );
}

export default App;