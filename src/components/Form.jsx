import React from 'react';

const Form = ({ title, children, className, formDisplayHandler }) => {
  return (
    <form className={className}>
      <p className="form_title">{title}</p>
      {children}
      <button type="button" onClick={formDisplayHandler}>
        Close
      </button>
    </form>
  );
};

export default Form;
