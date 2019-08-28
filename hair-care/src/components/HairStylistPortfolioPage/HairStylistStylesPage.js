import React from 'react';
import HairStylistDividerCard from './HairStylistDividerCard';

function HairStylistStylesPage(props) {
  console.log(props);
  const stylistId = props.match.params.stylist_id;

  const names = props.stylists.map(stylist => {
    return stylist.name;
  });
  console.log(names);
  return (
    <div>
      <h2 className="textShadow"> {`Hair Stylist: ${stylistId} `}</h2>
      <HairStylistDividerCard />
    </div>
  );
}

export default HairStylistStylesPage;
