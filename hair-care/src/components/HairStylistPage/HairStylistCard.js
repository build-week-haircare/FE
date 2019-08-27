import React from 'react';
import { Link } from 'react-router-dom';
import stylists from './HairStylistImages';

const HairStylistCard = props => {
  
  return (
    <div className="ui link cards">

      <div className="card">
        <div className="image">
          <img src="https://files.slack.com/files-pri/T4JUEB3ME-FMKDLFLTT/test2.jpg" alt="stylist 1"/>
        </div>

        <div className="content">
            <span className="header">Name</span>
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
            <Link to="/portfolio">View Portfolio</Link>
            <button className="ui icon button">
              <i className="thumbs down outline icon"></i>
            </button>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src="https://files.slack.com/files-pri/T4JUEB3ME-FMEBMV9EE/test6.jpg" alt="stylist 2"/>
        </div>

        <div className="content">
            <span className="header">Name</span>
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
            <Link to="/portfolio">View Portfolio</Link>
            <button className="ui icon button">
              <i className="thumbs down outline icon"></i>
            </button>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src="https://files.slack.com/files-pri/T4JUEB3ME-FMEBRNSKD/test1.jpg" alt="stylist 3"/>
        </div>

        <div className="content">
            <span className="header">Name</span>
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
            <Link to="/portfolio">View Portfolio</Link>
            <button className="ui icon button">
              <i className="thumbs down outline icon"></i>
            </button>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src="https://files.slack.com/files-pri/T4JUEB3ME-FMEBMV9FU/test5.jpg" alt="stylist 4"/>
        </div>

        <div className="content">
            <span className="header">Name</span>
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
            <Link to="/portfolio">View Portfolio</Link>
            <button className="ui icon button">
              <i className="thumbs down outline icon"></i>
            </button>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src="https://files.slack.com/files-pri/T4JUEB3ME-FMEBUC8RH/test4.jpg" alt="stylist 5"/>
        </div>

        <div className="content">
            <span className="header">Name</span>
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
            <Link to="/portfolio">View Portfolio</Link>
            <button className="ui icon button">
              <i className="thumbs down outline icon"></i>
            </button>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src="https://files.slack.com/files-pri/T4JUEB3ME-FMEBQJFMG/test10.jpg" alt="stylist 6"/>
        </div>

        <div className="content">
            <span className="header">Name</span>
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
            <Link to="/portfolio">View Portfolio</Link>
            <button className="ui icon button">
              <i className="thumbs down outline icon"></i>
            </button>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src="https://files.slack.com/files-pri/T4JUEB3ME-FMEBUC90B/test12.jpg" alt="stylist 7"/>
        </div>

        <div className="content">
            <span className="header">Name</span>
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
            <Link to="/portfolio">View Portfolio</Link>
            <button className="ui icon button">
              <i className="thumbs down outline icon"></i>
            </button>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src="https://files.slack.com/files-pri/T4JUEB3ME-FMRR2MP1B/test11.jpg" alt="stylist 8"/>
        </div>

        <div className="content">
            <span className="header">Name</span>
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
            <Link to="/portfolio">View Portfolio</Link>
            <button className="ui icon button">
              <i className="thumbs down outline icon"></i>
            </button>
        </div>
      </div>

    </div>
  );
};

export default HairStylistCard;