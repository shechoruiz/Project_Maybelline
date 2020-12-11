// ------------------------------ import libraries
import React, { useContext } from 'react';

// ------------------------------ import components
import { MakeupContext } from '../utils/MakeupContext';

// ------------------------------ import styles and images
import '../assets/styles/SearchBar.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const SearchBar = () => {
  const { handleSearchChange, handleSubmit, search } = useContext(MakeupContext);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="search-form">
      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={(e) => handleSearchChange(e)}
      ></input>
      <button className="search-button" type="submit">
        {' '}
        search{' '}
      </button>
    </form>
  );
};
