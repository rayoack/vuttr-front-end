import React from 'react';

import { Container } from './styles';

import checkImg from '../../assets/check.svg'

export default function SearchInput({
  searchState,
  setSearch,
  searchByTagState,
  setSearchByTag }) {
  return (
    <Container>
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
    </Container>
  );
}
