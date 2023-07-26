import React, { useState } from 'react';
// https://www.pngitem.com/middle/hxRbRT_profile-icon-png-default-profile-picture-png-transparent/
import profileImg from '../assets/profileImg.png';
import EditBtn from './EditBtn';
import Form from './Form';
import { useShowEdit } from './useShowEdit';

const Photo = () => {
  const [imgUrl, setImgUrl] = useState(profileImg);
  const [edit, setEdit] = useState(false);
  const [showedEdit, showEdit, hideEdit] = useShowEdit();

  const setFormDisplay = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target.parentElement;
    const inputValue = form.querySelector('#image_url').value;
    setImgUrl(inputValue);
  };

  return (
    <div className="Photo" onMouseEnter={showEdit} onMouseLeave={hideEdit}>
      <img src={imgUrl} alt="personal img" />
      {showedEdit && <EditBtn formDisplayHandler={setFormDisplay} />}
      {edit && (
        <Form title="Edit Photo" formDisplayHandler={setFormDisplay}>
          <label htmlFor="url">Image URL:</label>
          <input type="text" id="image_url" />
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </Form>
      )}
    </div>
  );
};

export default Photo;
