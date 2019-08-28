import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import { Image } from 'semantic-ui-react';

import './HairStylistPortfolio.css';

function HairStylistPortfolio(props) {
  const [stylists, setHairStylist] = useState([]);
  // console.log(props);

  useEffect(() => {
    axios.get('').then(res => {
      console.log(res);
      setHairStylist(res.data);
    });
  }, []);

  return (
    <section>
      <div className="ui fluid container">
        {props.hairstylist.map(stylist => {
          return (
            <div className="imageDiv" key={stylist.id}>
              <div className="img">
                <Link to={`/hairstylistpage/${stylist.id}`}>
                  <Image src={stylist.img} size="large" centered circular />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="h1Style">Styles Portfolio</h1>
      <h2 className="textShadow">Stylist Name:</h2>
      <h4 className="ui text container">
        Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam id,
        architecto quis facere repellendus eius culpa similique quaerat ullam
        sed maxime magni impedit reiciendis recusandae deserunt nisi nesciunt
        eaque. Modi?
      </h4>
      <NavLink to={`/`}>
        <button className="ui left labeled icon button">
          <i className="left arrow icon"></i>
          Back Home
        </button>
      </NavLink>

      <NavLink to={`portfolio/socialmedia`}>
        <button className="ui right labeled icon button">
          <i className="level down alternate icon"></i>
          Social Media
        </button>
      </NavLink>
    </section>
  );
}

export default HairStylistPortfolio;
