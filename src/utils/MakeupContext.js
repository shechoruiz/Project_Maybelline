import React, { useEffect, useState, createContext } from 'react';
export const MakeupContext = createContext();

export const MakeUpProvider = (props) => {
  let url = 'http://makeup-api.herokuapp.com/api/v1/products.json';
  const [makeUpItems, setMakeUpItems] = useState([]);
  const [search, setSearch] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchUrl = url + '?brand=' + search;
      console.log(searchUrl);
      const searchedData = await fetch(searchUrl);
      const data = await searchedData.json();
      setMakeUpItems(data);
      setSearch('');
    } catch (e) {
      console.log(e);
    }
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    getMakeupItems();
  }, []);

  const getMakeupItems = async () => {
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setMakeUpItems(data);
  };
  return (
    <MakeupContext.Provider
      value={{
        makeUpItems,
        setMakeUpItems,
        search,
        handleSearchChange,
        handleSubmit,
      }}
    >
      {props.children}
    </MakeupContext.Provider>
  );
};

export default { MakeupContext, MakeUpProvider };