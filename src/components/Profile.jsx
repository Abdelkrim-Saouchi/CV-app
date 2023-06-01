import React, { Component } from 'react';
import uniqid from 'uniqid';

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
    };
    this.changeHandler = this.changeHandler.bind(this);
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

  render() {
    const profileList = this.state.profileList.map((item) => (
      <li key={item.id}>{item.text}</li>
    ));
    return (
      <div className="Profile">
        <ul>{profileList}</ul>
        <button className="edit_btn">Edit</button>

        <form className="Profile_form">
          {this.state.profileList.map((element, index) => (
            <input
              key={element.id}
              id={index}
              value={element.text}
              onChange={this.changeHandler}
            />
          ))}
          <input />
        </form>
      </div>
    );
  }
}
