import React, { useState } from 'react';
import uniqid from 'uniqid';
import addIcon from '../assets/add-plus-square-svgrepo-com.svg';
import deleteIcon from '../assets/delete-2-svgrepo-com.svg';
import EditBtn from './EditBtn';
import Form from './Form';
import { useShowEdit } from './useShowEdit';

const initialProfileList = [
  {
    id: uniqid(),
    text: 'Reseacher of structural and publication data resulting in the development of insights and contribution to the quality of a molecular database',
  },
  {
    id: uniqid(),
    text: 'Scientific consultant of validation software for structural data',
  },
  {
    id: uniqid(),
    text: 'Assistant of the lead teacher of an introduction to programming in Python for scientific students',
  },
];

const Profile = () => {
  const [profileList, setProfileList] = useState(initialProfileList);
  const [edit, setEdit] = useState(false);
  const [showedEdit, showEdit, hideEdit] = useShowEdit();

  const setFormDisplay = () => {
    setEdit(!edit);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    const targetIndex = Number(e.target.id);
    const newProfileList = profileList.map((item, index) => {
      if (index === targetIndex) {
        item.text = e.target.value;
      }
      return item;
    });
    setProfileList(newProfileList);
  };

  const addProfileItem = (e) => {
    e.preventDefault();
    const newItemText = e.target.previousSibling.value;
    setProfileList([...profileList, { id: uniqid(), text: newItemText }]);
    e.target.previousSibling.value = '';
  };

  const deleteProfileItem = (e) => {
    e.preventDefault();
    const targetIndex = Number(e.target.previousSibling.id);
    const newProfileList = profileList.filter(
      (item, index) => index !== targetIndex
    );
    setProfileList(newProfileList);
  };

  return (
    <div className="Profile" onMouseEnter={showEdit} onMouseLeave={hideEdit}>
      <ul>
        {profileList.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      {showedEdit && <EditBtn formDisplayHandler={setFormDisplay} />}
      {edit && (
        <Form title="Edit Profile" formDisplayHandler={setFormDisplay}>
          {profileList.map((element, index) => {
            return (
              <div key={element.id} className="input_container">
                <input
                  id={index}
                  value={element.text}
                  onChange={changeHandler}
                />
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={deleteProfileItem}
                />
              </div>
            );
          })}
          <div className="input_container">
            <input id="add_input" />
            <img src={addIcon} alt="add icon" onClick={addProfileItem} />
          </div>
        </Form>
      )}
    </div>
  );
};

export default Profile;
