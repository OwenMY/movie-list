import React from 'react';
const SearchBar = ({clickSearch, keyPress}) => {
  return (
    <div>
      <input placeholder={'Search...'} onKeyPress={(e) => {keyPress(e)}} className="search" name="search" type="search"  />
      <button onClick={(e) => {clickSearch(e)} } id="search-btn" type="text">Go!</button>
    </div>
  )
}

export default SearchBar;