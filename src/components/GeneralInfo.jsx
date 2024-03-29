import React, { useState } from 'react';
import emailIcon from '../assets/email-svgrepo-com.svg';
import phoneIcon from '../assets/phone-rotary-svgrepo-com.svg';
import EditBtn from './EditBtn';
import Form from './Form';
import { useShowEdit } from './useShowEdit';

const GeneralInfo = () => {
  const [name, setName] = useState('Your Name');
  const [phone, setPhone] = useState('124-333-200');
  const [email, setEmail] = useState('example@gmail.com');
  const [edit, setEdit] = useState(false);
  const [showedEdit, showEdit, hideEdit] = useShowEdit();

  const setFormDisplay = () => {
    setEdit(!edit);
  };

  return (
    <div
      className="GeneralInfo"
      onMouseEnter={showEdit}
      onMouseLeave={hideEdit}
    >
      <h1>{name}</h1>

      <div className="info">
        <p className="phone">
          <img src={phoneIcon} alt="phone icon" /> {phone}
        </p>
        <p className="email">
          <img src={emailIcon} alt="email icon" /> {email}
        </p>
      </div>
      {showedEdit && <EditBtn formDisplayHandler={setFormDisplay} />}
      {edit && (
        <Form title="Edit General Info" formDisplayHandler={setFormDisplay}>
          <label htmlFor="nameInput">
            Name:
            <input
              type="text"
              id="nameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="phoneInput">
            Phone:
            <input
              type="text"
              id="phoneInput"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </Form>
      )}
    </div>
  );
};

export default GeneralInfo;
