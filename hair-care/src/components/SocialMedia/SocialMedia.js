import React from 'react';

import '../SocialMedia/SocialMedia.css';

const SocialMedia = () => {
  return (
    <div>
      <h3 className="socialMediaH1">See more of my work here:</h3>
      <a href="/">
        <i className="facebook icon"></i>
      </a>
      <a href="/">
        <i className="instagram icon"></i>
      </a>
      <a href="/">
        <i className="twitter icon"></i>
      </a>
    </div>
  );
};

export default SocialMedia;
