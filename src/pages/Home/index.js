import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";

import Header from '../../components/Header'
import SearchInput from '../../components/SearchInput'
import AddButton from '../../components/AddButton'
import ToolsList from '../../components/ToolsList'
import ModalAdd from '../../components/ModalAdd'
import addNotification from '../../components/addNotification'
import ModalRemove from '../../components/ModalRemove'
import removeNotification from '../../components/removeNotification'

import LoadingSpinner from '../../assets/loading-spinner.svg'

import api from '../../services/api'

import { ContainerBody, ContainerInput } from './styles';

export default function Home() {
  const [tools, setTools] = useState([])
  const [search, setSearch] = useState('')
  const [searchByTag, setSearchByTag] = useState(false)
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openRemoveModal, setOpenRemoveModal] = useState(false)
  const [loading, setLoading] = useState(true)

  /* States only for ModalAdd component */
    const [toolName, setToolName] = useState('')
    const [toolLink, setToolLink] = useState('')
    const [toolDescription, setToolDescription] = useState('')
    const [toolTags, setToolTags] = useState('')

  useEffect(() => {
    async function getTools() {
      setLoading(true)
      const { data: toolsArr } = await api.get('/tools')
      
      setTools(toolsArr)
      setLoading(false)
    }

    getTools()
  }, [])

  const handleSearchTools = async (e) => {
    e.preventDefault()
    if(searchByTag) {
      const { data: tagToolS } = await api.get(`/tools?tags_like=${search}`)
      setTools(tagToolS)
    } else {
      const { data: searchToolS } = await api.get(`/tools?q=${search}`)
      setTools(searchToolS)
    }
  }

  const addTool = async e => {
    e.preventDefault()

    const tagsArr = toolTags.split(' ');

    try {
      await api.post('/tools', {
        title: toolName,
        link: toolLink,
        description: toolDescription,
        tags: tagsArr
      })

      addNotification()
      setOpenAddModal(false)
    } catch (error) {
      console.log({error})
    }
  }

  const RemoveTool = () => {

  }
  
  return (
    <>
      <ContainerBody>
        <Header />

        <ContainerInput>
          <SearchInput
            searchState={search}
            setSearch={setSearch}
            searchByTagState={searchByTag}
            setSearchByTag={setSearchByTag}
            handleSearchTools={handleSearchTools}
          />
          <AddButton setOpenAddModal={setOpenAddModal} />
        </ContainerInput>
        
        {loading
          ? <img src={LoadingSpinner} alt='loading...' />
          : <ToolsList tools={tools} setOpenRemoveModal={setOpenRemoveModal} />
        }
        
        
        {openAddModal && (
          <ModalAdd
          openAddModal={openAddModal}
          setToolName={setToolName}
          setToolLink={setToolLink}
          setToolDescription={setToolDescription}
          setToolTags={setToolTags}
          setOpenAddModal={setOpenAddModal}
          addTool={addTool}
          />
          )}
      </ContainerBody>
      <ToastContainer />
    </>
  );
}
