import React from 'react';
const SearchBar = ({handleSearch}) => {
  return (
      <>
      <input placeholder={'Search...'} className="search" name="search" type="search"/>
      <button onClick={(e) => {handleSearch(e)} } id="search-btn" type="text">Go!</button>
      </>
  )
}

export default SearchBar;