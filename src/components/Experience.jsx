import React, { Component } from 'react';
import timeIcon from '../calendar-1196-svgrepo-com.svg';
import locationIcon from '../location-pin-svgrepo-com.svg';
export default class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <div className="exp one">
          <h2>
            <div className="job">Nice job</div>
            <div className="company">Super Company</div>
          </h2>
          <div className="exp_info">
            <div className="period">
              <img src={timeIcon} alt="period icon" />
              2015-2018
            </div>
            <div className="location">
              <img src={locationIcon} alt="location icon" /> Lorem, ipsum.
            </div>
          </div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              beatae.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui
              suscipit molestiae nisi.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div className="exp two">
          <h2>
            <div className="job">Very Good job</div>
            <div className="company">Very Good Company</div>
          </h2>
          <div className="exp_info">
            <div className="period">
              <img src={timeIcon} alt="period icon" />
              2018-presence
            </div>
            <div className="location">
              <img src={locationIcon} alt="location icon" /> Lorem, ipsum.
            </div>
          </div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              beatae.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui
              suscipit molestiae nisi.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
    );
  }
}
