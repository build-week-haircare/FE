import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

 const HairStylistCard = props => {
  const {} = props.stylist;
  return (
    <div class="ui card">
      <div class="image">
        <img src={image} />
      </div>
      <div class="content">
        <a class="header">{name}</a>
        <div class="meta">
          <span class="date">{shop}</span>
        </div>
        <div class="description">{type}</div>
        <div class="description">{status}</div>
      </div>
      <div class="extra content">
        <a>
          <i class="user icon" />
        </a>
      </div>
    </div>
  );
};

 export default HairStylistCard;