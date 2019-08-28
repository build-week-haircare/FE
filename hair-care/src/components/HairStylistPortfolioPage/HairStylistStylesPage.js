import React from 'react';
import { Link } from 'react-router-dom';
import HairStylistDividerCard from './HairStylistDividerCard';
import HairStylistModal from './HairStylistModal';

function HairStylistStylesPage(props) {
  console.log(props);
  // const  = props.match.params.stylist_id;
  //This is saying loop through the stylist data structure and find the stylist that matches the route parameter of stylist_id and if it is equal to the items id give us that item. This now give you access to all of that objects data, stored in the constant stylistId.
  const stylistId = props.stylists.find(
    stylist => props.match.params.stylist_id === `${stylist.id}`
  );

  return (
    <div>
      <h2 className="textShadow"> {`Hair Stylist: ${stylistId.name} `}</h2>
      <HairStylistDividerCard />
      <HairStylistModal />
      <Link to="/portfolio">
        <button fluid class="ui animated button">
          <div class="visible content">back to portfolio page</div>
          <div class="hidden content">
            <i aria-hidden="true" class="arrow left icon"></i>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default HairStylistStylesPage;
