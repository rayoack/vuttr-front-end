import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";

import Header from '../../components/Header'
import SearchInput from '../../components/SearchInput'
import AddButton from '../../components/AddButton'
import ToolsList from '../../components/ToolsList'
import ModalAdd from '../../components/ModalAdd'
import ModalRemove from '../../components/ModalRemove'
import addNotification from '../../components/addNotification'
import removeNotification from '../../components/removeNotification'

import { Container, ContainerInput } from './styles';

export default function Home() {
  const [tools, setTools] = useState([])
  const [search, setSearch] = useState('')
  const [searchByTag, setSearchByTag] = useState(false)
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openRemoveModal, setOpenRemoveModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const getTools= () => {

  }

  const getAllTools = () => {

  }

  const getByTag = () => {

  }

  const searchTools = () => {

  }

  const addTool = () => {

  }

  const RemoveTool = () => {

  }
  
  return (
    <Container>
      <Header />

      <ContainerInput>
        <SearchInput
          searchState={search}
          setSearch={setSearch}
          searchByTagState={searchByTag}
          setSearchByTag={setSearchByTag}
        />
        <AddButton />
      </ContainerInput>
      
      <ToolsList />
      
      <ToastContainer />
    </Container>
  );
}
