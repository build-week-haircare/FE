import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import HairStylistStylesPage from './HairStylistStylesPage';

import './HairStylistPortfolio.css';

function HairStylistPortfolio() {
  return (
    <div className="ui text container">
      <h1>Hair Care Portfolio</h1>
      <h4>
        Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam id,
        architecto quis facere repellendus eius culpa similique quaerat ullam
        sed maxime magni impedit reiciendis recusandae deserunt nisi nesciunt
        eaque. Modi?
      </h4>
      <NavLink to={`/`}>
        <button class="ui left labeled icon button">
          <i class="left arrow icon"></i>
          Back
        </button>
      </NavLink>
      <div class="ui animated fade button" tabindex="0">
        <NavLink to={`/hairstylistpage`}>
          <div class="visible content">View my work</div>
          <div class="hidden content">Thank you</div>
        </NavLink>
      </div>
    </div>
  );
}

export default HairStylistPortfolio;
