import { useState } from 'react';

export const useShowEdit = () => {
  const [showedEdit, setShowedEdit] = useState(false);

  const showEdit = () => {
    setShowedEdit(true);
  };

  const hideEdit = () => {
    setShowedEdit(false);
  };

  return [showedEdit, showEdit, hideEdit];
};
