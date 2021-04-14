import React from 'react';


const Search = (props) => {

  return (
    <form className="search_form"
      onSubmit={props.submitSearch}>
      <input type="text" className="search_bar"
        value={props.search} onChange={props.updateSearch}/>
      <button className="search_button" type="submit">search
      </button>
    </form>
  )
}

export default Search