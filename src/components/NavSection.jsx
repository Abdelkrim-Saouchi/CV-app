import React, { Component } from 'react';

export default class ProfileNav extends Component {
  render() {
    return (
      <div className="NavSection">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}
