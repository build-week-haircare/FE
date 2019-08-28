import React from 'react';
import { Link } from 'react-router-dom';

import '../SocialMedia/SocialMedia.css';

const SocialMedia = () => {
  return (
    <div>
      <h3 className="socialMediaH1">Book Appointment Here:</h3>
      <Link to="https://www.facebook.com">
        <i className="facebook icon"></i>
      </Link>
      <Link to="https://www.instagram.com">
        <i className="instagram icon"></i>
      </Link>
      <Link to="https://twitter.com">
        <i className="twitter icon"></i>
      </Link>
    </div>
  );
};

export default SocialMedia;
