import React, { Component } from 'react';
import timeIcon from '../calendar-1196-svgrepo-com.svg';

export default class Education extends Component {
  render() {
    return (
      <div className="Education">
        <div className="edu one">
          <h2>
            <div className="study">Doctor Degree</div>
            <div className="university">Super University</div>
          </h2>
          <div className="edu_info">
            <div className="period">
              <img src={timeIcon} alt="period icon" />
              2010-2015
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
        <div className="edu two">
          <h2>
            <div className="study">Master Degree</div>
            <div className="university">Very Good University</div>
          </h2>
          <div className="edu_info">
            <div className="period">
              <img src={timeIcon} alt="period icon" />
              2005-2010
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
