import React from 'react';

import { ButtonContainer } from './styles';

export default function AddButton({ setOpenAddModal }) {
  return (
    <ButtonContainer onClick={() => setOpenAddModal(true)}>
      <span>+</span>
      <p>Add</p>
    </ButtonContainer>
  );
}
