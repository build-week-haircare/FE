import React, { useEffect, useState } from 'react';
import './HairStylistMainPage.css';
import axios from 'axios';
import HairStylistCard from './HairStylistCard';
import hairstylist from './HairStylistImages';



const HairStylistMainPage = () =>{
    const [styler, setStyler] = useState("");
    // const [hairstylist, setHairStylist] = useState([]);
  //   // console.log(props, "props");
  //   // console.log("hairstylists", hairstylist);

  useEffect(() => {
    axios.get('https://bw-hair-care-be.herokuapp.com/').then(res => {
      console.log(res);
      setStyler(res.data)
    });
  }, []);

  return (
    <section className="character-list">
      <div className="ui text container">
      <div className="ui divider"></div>
        <h2>
          We provide the best and fastest way to find a great hairstylist.
          Getting the trendiest haircut with confidence. <br /> “You need a
          haircut? We got you’re haircut.”
        </h2>
      </div>
       
      <h3 className="ui dividing header"></h3>
      <h1>Find Stylists</h1>
      {styler}
    <div className="images">
      
      {hairstylist.map(stylists => {
        console.log(stylists);
        return (
        <div key={stylists.id}><HairStylistCard key={stylists.id} stylists={stylists}/> </div>
        )
      })}
    </div>    
    </section>
  );
};

export default HairStylistMainPage;