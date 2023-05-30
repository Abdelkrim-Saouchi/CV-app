import React, { Component } from 'react';
// https://www.pngitem.com/middle/hxRbRT_profile-icon-png-default-profile-picture-png-transparent/
import profileImg from '../profileImg.png';

export default class Photo extends Component {
  render() {
    return (
      <div className="Photo">
        <img src={profileImg} alt="personal img" />
      </div>
    );
  }
}
