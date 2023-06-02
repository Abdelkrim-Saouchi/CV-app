import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const { title, children, formDisplayHandler } = this.props;
    return (
      <form className={this.props.className}>
        <p className="form_title">{title}</p>
        {children}
        <button type="button" onClick={formDisplayHandler}>
          Close
        </button>
      </form>
    );
  }
}
