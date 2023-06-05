import React, { Component } from 'react';
// https://www.pngitem.com/middle/hxRbRT_profile-icon-png-default-profile-picture-png-transparent/
import profileImg from '../assets/profileImg.png';
import EditBtn from './EditBtn';
import Form from './Form';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: profileImg,
      formClassName: 'form Photo_form hidden',
    };
    this.setFormDisplay = this.setFormDisplay.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  setFormDisplay() {
    this.setState({
      formClassName:
        this.state.formClassName === 'form Photo_form hidden'
          ? 'form Photo_form'
          : 'form Photo_form hidden',
    });
  }

  submitHandler(e) {
    e.preventDefault();
    const form = e.target.parentElement;
    const inputValue = form.querySelector('#image_url').value;
    console.log(inputValue);
    this.setState({
      imgURL: inputValue,
    });
  }

  render() {
    return (
      <div className="Photo">
        <img src={this.state.imgURL} alt="personal img" />
        <EditBtn formDisplayHandler={this.setFormDisplay} />
        <Form
          className={this.state.formClassName}
          title="Edit Photo"
          formDisplayHandler={this.setFormDisplay}
        >
          <label htmlFor="url">Image URL:</label>
          <input type="text" id="image_url" />
          <button type="submit" onClick={this.submitHandler}>
            Submit
          </button>
        </Form>
      </div>
    );
  }
}
