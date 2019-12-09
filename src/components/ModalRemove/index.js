import React from 'react';
import { MdClear } from 'react-icons/md'

import { 
  RemoveContainerModal,
  RemoveModalBox,
  RemoveModalTitle,
  RemoveModalDescription,
  RemoveButtons
 } from './styles';

export default function ModalRemove({ setOpenRemoveModal, handleRemoveTool }) {
  return (
    <RemoveContainerModal>
      <RemoveModalBox>
        <div>
          <RemoveModalTitle>
            <MdClear size={30} />
            <h4>Remove tool</h4>
          </RemoveModalTitle>
        </div>
          
        <RemoveModalDescription>
          <p>Are you sure you want to remove</p>
        </RemoveModalDescription>
        <RemoveButtons>
          <button onClick={() => setOpenRemoveModal(false)}>Cancel</button>
          <button onClick={() => handleRemoveTool()}>Yes, remove</button>
        </RemoveButtons>
      </RemoveModalBox>
    </RemoveContainerModal>
  );
}
