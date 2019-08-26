import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Hair from '../../../src/hairstylistOne.jpg';
import SocialMedia from '../SocialMedia/SocialMedia';

import { Image } from 'semantic-ui-react';

import './HairStylistPortfolio.css';

function HairStylistPortfolio() {
  return (
    <div className="ui fluid container">
      <h1 className="h1Style">Styles Portfolio</h1>
      <div className="img">
        <Image src={Hair} size="small" centered circular />
      </div>

      <h2 className="textShadow"> {`Hair Stylist: `}</h2>
      <h4 className="ui text container">
        Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam id,
        architecto quis facere repellendus eius culpa similique quaerat ullam
        sed maxime magni impedit reiciendis recusandae deserunt nisi nesciunt
        eaque. Modi?
      </h4>
      <NavLink to={`/`}>
        <button class="ui left labeled icon button">
          <i class="left arrow icon"></i>
          Back Home
        </button>
      </NavLink>
      <div class="ui animated fade button" tabindex="0">
        <NavLink to={`/hairstylistpage/`}>
          <div class="visible content">View my work</div>
          <div class="hidden content">Thank you</div>
        </NavLink>
      </div>
      <NavLink to={`/portfolio/socialmedia`}>
        <button class="ui right labeled icon button">
          <i class="right arrow icon"></i>
          Social Media
        </button>
      </NavLink>
    </div>
  );
}

export default HairStylistPortfolio;
