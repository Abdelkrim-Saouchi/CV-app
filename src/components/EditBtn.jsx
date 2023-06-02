import React, { Component } from 'react';

export default class EditBtn extends Component {
  render() {
    const { formDisplayHandler } = this.props;
    return (
      <button className="edit_btn" onClick={formDisplayHandler}>
        Edit
      </button>
    );
  }
}
