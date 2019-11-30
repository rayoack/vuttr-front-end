import React from 'react';

import { Container } from './styles';

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
        onKeyUp={e => setSearch(e)}
      />
    </Container>
  );
}
