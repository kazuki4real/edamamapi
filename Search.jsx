import React from 'react';


const Search = ({updateSearch, submitSearch, search}) => {

  return (
    <form className="search_form" onSubmit={submitSearch}>
      <input type="text" className="search_bar" value={search} onChange={updateSearch}/>
      <button className="search_button" type="submit">search
      </button>
    </form>
  )
}

export default Search