import React, { Component } from 'react';
import phoneIcon from '../phone-rotary-svgrepo-com.svg';
import emailIcon from '../email-svgrepo-com.svg';

export default class GeneralInfo extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: 'Your Name',
        phone: '124-333-200',
        email: 'example@gmail.com',
      },
      formClassName: 'generalInfo_form hidden',
    };
    this.setFormDisplay = this.setFormDisplay.bind(this);
  }

  setFormDisplay() {
    this.setState({
      formClassName:
        this.state.formClassName === 'generalInfo_form hidden'
          ? 'generalInfo_form'
          : 'generalInfo_form hidden',
    });
  }

  setNameInput(name) {
    this.setState({
      info: {
        name: name,
        phone: this.state.info.phone,
        email: this.state.info.email,
      },
    });
  }

  setPhoneInput(phone) {
    this.setState({
      info: {
        name: this.state.info.name,
        phone: phone,
        email: this.state.info.email,
      },
    });
  }

  setEmailInput(email) {
    this.setState({
      info: {
        name: this.state.info.name,
        phone: this.state.info.phone,
        email: email,
      },
    });
  }

  render() {
    return (
      <div className="GeneralInfo">
        <h1>{this.state.info.name}</h1>

        <div className="info">
          <p className="phone">
            <img src={phoneIcon} alt="phone icon" /> {this.state.info.phone}
          </p>
          <p className="email">
            <img src={emailIcon} alt="email icon" /> {this.state.info.email}
          </p>
        </div>
        <button className="edit_btn" onClick={this.setFormDisplay}>
          Edit
        </button>

        <form className={this.state.formClassName}>
          <p className="form_title">Edit General info</p>
          <label htmlFor="nameInput">
            Name:
            <input
              type="text"
              id="nameInput"
              value={this.state.info.name}
              onChange={(e) => this.setNameInput(e.target.value)}
            />
          </label>
          <label htmlFor="phoneInput">
            Phone:
            <input
              type="text"
              id="phoneInput"
              value={this.state.info.phone}
              onChange={(e) => this.setPhoneInput(e.target.value)}
            />
          </label>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              id="emailInput"
              value={this.state.info.email}
              onChange={(e) => this.setEmailInput(e.target.value)}
            />
          </label>
          <button type="button" onClick={this.setFormDisplay}>
            Close
          </button>
        </form>
      </div>
    );
  }
}
