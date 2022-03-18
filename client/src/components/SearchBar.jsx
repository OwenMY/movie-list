import React from 'react';
const SearchBar = ({clickSearch}) => {
  console.log(clickSearch)
  return (
      <>
      <input placeholder={'Search...'} className="search" name="search" type="search"/>
      <button onClick={(e) => {clickSearch.handleSearch(e)} } id="search-btn" type="text">Go!</button>
      </>
  )
}

export default SearchBar;