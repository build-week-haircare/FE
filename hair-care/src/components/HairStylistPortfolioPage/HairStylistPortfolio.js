import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import { Image, Popup } from 'semantic-ui-react';

import './HairStylistPortfolio.css';

function HairStylistPortfolio(props) {
  const [stylists, setHairStylist] = useState([]);
  // console.log(props);

  useEffect(() => {
    axios.get('https://bw-hair-care-be.herokuapp.com/').then(res => {
      console.log(res);
      // setHairStylist(res.data);
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
                  <Popup
                    content={`Hair Stylist: ${stylist.name}`}
                    trigger={
                      <Image src={stylist.img} size="large" centered circular />
                    }
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="h1Style">StyList Portfolio</h1>

      <h4 className="ui text container">
        <p>
          As a stylist I have proven myself as a visionary artist with clients
          and hairdressers alike. Being imaginative and always defining my
          individual style. Being able to participate in the Canadian renowned,
          “Contessa” awards and earning myspot as a finalist for “Student
          Apprentice” & “New Comer” categories in hair has been a true blessing.
          With great honour also being able to dress hair for the Cirque Du
          Soleil at the PanAm games 2015 opening ceremony. I am known for
          precision cuts, creative color/corrective color as well, as all forms
          of hair extensions/bonds and avant-garde styles. Believing in my
          talent is what continues to help me raise the bar in and out of the
          salon.
        </p>
      </h4>
      <NavLink to={`/Mainpage`}>
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
