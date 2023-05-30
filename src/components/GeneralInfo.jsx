import React, { Component } from 'react';
import phoneIcon from '../phone-rotary-svgrepo-com.svg';
import emailIcon from '../email-svgrepo-com.svg';

export default class GeneralInfo extends Component {
  render() {
    return (
      <div className="GeneralInfo">
        <h1>Your Name</h1>
        <div className="info">
          <p className="phone">
            <img src={phoneIcon} alt="phone icon" /> 1254-324-214
          </p>
          <p className="email">
            <img src={emailIcon} alt="email icon" /> example@gmail.com
          </p>
        </div>
      </div>
    );
  }
}
