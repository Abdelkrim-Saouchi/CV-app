import React, { Component } from 'react';
import uniqid from 'uniqid';
import deleteIcon from '../delete-2-svgrepo-com.svg';
import addIcon from '../add-plus-square-svgrepo-com.svg';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profileList: [
        {
          id: uniqid(),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quos.',
        },
        {
          id: uniqid(),
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        },
        {
          id: uniqid(),
          text: 'Lorm ipsum dolor sit amet consectetur, adipisicing elit. Dolor reiciendis aut incidunt porro adipisci delectus?',
        },
      ],
      formClassName: 'Profile_form',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addProfileItem = this.addProfileItem.bind(this);
    this.deleteProfileItem = this.deleteProfileItem.bind(this);
    this.setFormDisplay = this.setFormDisplay.bind(this);
  }

  changeHandler(e) {
    e.preventDefault();
    const targetIndex = Number(e.target.id);
    const newProfileList = this.state.profileList.map((item, index) => {
      if (index === targetIndex) {
        item.text = e.target.value;
      }
      return item;
    });
    this.setState({
      profileList: [...newProfileList],
    });
  }

  addProfileItem(e) {
    e.preventDefault();
    const newItemText = e.target.previousSibling.value;
    this.setState({
      profileList: [
        ...this.state.profileList,
        { id: uniqid(), text: newItemText },
      ],
    });
    e.target.previousSibling.value = '';
  }

  deleteProfileItem(e) {
    e.preventDefault();
    const targetIndex = Number(e.target.previousSibling.id);
    const newProfileList = this.state.profileList.filter(
      (item, index) => index !== targetIndex
    );
    this.setState({
      profileList: [...newProfileList],
    });
  }

  setFormDisplay() {
    this.setState({
      formClassName:
        this.state.formClassName === 'Profile_form hidden'
          ? 'Profile_form'
          : 'Profile_form hidden',
    });
  }

  render() {
    const profileList = this.state.profileList.map((item) => (
      <li key={item.id}>{item.text}</li>
    ));
    return (
      <div className="Profile">
        <ul>{profileList}</ul>
        <button className="edit_btn" onClick={this.setFormDisplay}>
          Edit
        </button>

        <form className={this.state.formClassName}>
          <p className="form_title">Edit Profile</p>
          {this.state.profileList.map((element, index) => {
            return (
              <div key={element.id} className="input_container">
                <input
                  id={index}
                  value={element.text}
                  onChange={this.changeHandler}
                />
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={this.deleteProfileItem}
                />
              </div>
            );
          })}
          <div className="input_container">
            <input id="add_input" />
            <img src={addIcon} alt="add icon" onClick={this.addProfileItem} />
          </div>
          <button type="button" onClick={this.setFormDisplay}>
            Close
          </button>
        </form>
      </div>
    );
  }
}
