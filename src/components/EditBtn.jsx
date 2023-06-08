import React from 'react';

const EditBtn = ({ formDisplayHandler }) => {
  return (
    <button className="edit_btn" onClick={formDisplayHandler}>
      Edit
    </button>
  );
};

export default EditBtn;
