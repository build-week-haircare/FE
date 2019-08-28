import React from 'react';
import { Link } from 'react-router-dom';
import stylists from './HairStylistImages';

const HairStylistCard = props => {
  
  return (
    <div className="ui link card">
  
      <div className="card">
        <div className="image">
        <img src={props.stylists.img} />
        </div>
        <div className="content">
            <span className="header">{props.stylists.name}</span>
            <div className="meta">
              <span className="date">Salon</span>
            </div>
            <div className="description">Years Styling: 8 </div>
            <div className="description">Status: Available On Request</div>
        </div>

        <div className="extra content">
            <button className="ui icon button">
              <i className="thumbs up outline icon"></i>
            </button>
            <Link to="/portfolio">View Portfolio </Link>
            <button className="ui icon button">
              <i className="thumbs down outline icon"></i>
            </button>
        </div>
      </div>


    </div>
  
  );
};

export default HairStylistCard;