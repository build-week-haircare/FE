import React, { useEffect, useState } from 'react';
import HairStylistCard from './HairStylistCard';
import axios from 'axios';
const HairStylistMainPage = () => {
  // TODO-1: Add useState to track data from useEffect
  const [hairstylist, setHairStylist] = useState([]);

   // always console.log  the data you are working with. So you can understand how to use that data.
  console.log(hairstylist);

   //  Add API Request here - must run in `useEffect`
  //  Important: verify the 'useEffect' parameter: the dependancies array!

   //Huge List of data, that's it. We loop through lists, and that is what I do here. After I loop through the list from the api I pass that data to the Hair Stylist Card component via props. So this entire Hair Stylist component returns a new array, of the Hair Stylist Card component with the data looped over each time for each item in that array. That is what this components code RESOLVES TO.

   //   useEffect(() => {
  //     axios
  //       .get('')
  //       .then(response => {
  //         // console.log(response); waiting on api from backend
  //         // setHairStylist(response);
  //       })
  //       .catch(error => {
  //         console.error('Server Error', error);
  //       });
  //   }, []);

   return (
    <section className="character-list grid-view">
      {hairstylist.map(stylist => {
        console.log(stylist);
        return <HairStylistCard key={stylist.id} stylist={stylist} />;
      })}
    </section>
  );
};

 export default HairStylistMainPage;