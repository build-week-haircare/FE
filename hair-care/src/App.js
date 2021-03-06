import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Divider } from 'semantic-ui-react';
import stylistData from '../src/components/Carousel/StylistImageData';

import LoginForm from "./forms/LoginForm";
import Registration from './components/Registration/Registrastion'
import Logo from '../src/imgs/haircare.png';
import HairStylistPortfolio from './components/HairStylistPortfolioPage/HairStylistPortfolio';
import HairStylistStylesPage from './components/HairStylistPortfolioPage/HairStylistStylesPage';
import SocialMedia from './components/SocialMedia/SocialMedia';
import HairStylistMainPage from './components/HairStylistPage/HairStylistMainPage';

function App() {
  const [hsImage, setHSImage] = useState(stylistData);
  return (

    <div className="App">
      <Router>
      <Divider horizontal>
        <img src={Logo} alt="hair logo" />
      </Divider>
       <Route path="/LoginForm" component={LoginForm} />
      <Route exact path='/' component={Registration} />


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

       <Route exact path={`/Mainpage`} component={HairStylistMainPage} />
         {/* <Route path ={`/portfolio`} component={HairStylistPortfolio} /> */}      
      </Router>
    </div>
  );
}

export default App;