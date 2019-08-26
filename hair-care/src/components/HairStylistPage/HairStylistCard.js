import React from 'react';
import { Link } from 'react-router-dom';

const HairStylistCard = props => {
  //   const {} = props.stylist;
  return (
    <div class="ui card container">
      <div class="image">
        <img src="https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div class="content">
        <span class="header">name</span>
        <div class="meta">
          <span class="date">Salon</span>
        </div>
        <div class="description">Years Styling: 8 </div>
        <div class="description">Status: Available On Request</div>
      </div>
      <div class="extra content">
        <button class="ui icon button">
          <i class="thumbs up outline icon"></i>
        </button>
        <Link to="/portfolio">View Portfolio</Link>
        <button class="ui icon button">
          <i class="thumbs down outline icon"></i>
        </button>
      </div>
    </div>
  );
};

export default HairStylistCard;