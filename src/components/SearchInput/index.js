import React from 'react';

import { FormContainer } from './styles';

import checkImg from '../../assets/check.svg'

export default function SearchInput({
  searchState,
  setSearch,
  searchByTagState,
  setSearchByTag,
  handleSearchTools }) {
  return (
    <FormContainer onSubmit={e => handleSearchTools(e)}>
      <input
        placeholder='search'
        type='text'
        value={searchState}
        onChange={e => setSearch(e.target.value)}
      />

      <input
        type='checkbox'
        defaultChecked={searchByTagState}
        onChange={() => setSearchByTag(prevState => !prevState)}
        id='byTag'
      />
      <label for='byTag' />

      <label>search in tags only</label>
    </FormContainer>
  );
}
