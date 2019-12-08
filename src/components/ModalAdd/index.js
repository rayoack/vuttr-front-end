import React from 'react';
import Modal from 'react-modal'

import {
  ContainerModal,
  ModalBox,
  ModalTitle,
  LogoIcon,
  InputsContainer} from './styles';

export default function ModalAdd({
  openAddModal,
  setToolName,
  setToolLink,
  setToolDescription,
  setToolTags,
  setOpenAddModal,
  addTool }) {
  return (
    <ContainerModal>
      <ModalBox>
        <div>
          <ModalTitle>
            <span>+</span>
            <h4>Add new tool</h4>
          </ModalTitle>
          <button onClick={() => setOpenAddModal(false)}>x</button>
        </div>

        <LogoIcon>
          <div>
            V
          </div>
        </LogoIcon>

        <InputsContainer onSubmit={e => addTool(e)}>
          <label for="tool-name">Tool Name</label>
          <input
            type='text'
            placeholder='insert name'
            name="tool-name"
            onChange={e => setToolName(e.target.value)} />

          <label for="tool-link">Tool Link</label>
          <input
            type='text'
            placeholder='insert link'
            name="tool-link"
            onChange={e => setToolLink(e.target.value)} />

          <label for="tool-description">Tool Description</label>
          <textarea
            type='text'
            placeholder='insert description'
            name="tool-description"
            onChange={e => setToolDescription(e.target.value)} />          

          <label for="tool-tags">Tool Tags</label>
          <input
            type='text'
            placeholder='insert tags with space'
            name="tool-tags"
            onChange={e => setToolTags(e.target.value)} />

          <input type="submit" />
        </InputsContainer>
      </ModalBox>
    </ContainerModal>
  );
}
