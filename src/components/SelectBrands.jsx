// ------------------------------ import libraries
import React, { useState, useEffect } from 'react';

// ------------------------------ import components
import { Card } from '../components/Card';
const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=";

// ------------------------------ import styles and images
// import '../assets/styles/SelectProducts.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const SelectBrands = () => {
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setBrands(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchValue}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setBrands(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <>
      <section className="selectProducts">
        <div className="titleProducts">
          <h1>BRANDS</h1>
        </div>
        <div className="selectionProducts">
          <form className="search">
            <input
              value={searchValue}
              onChange={handleSearchInputChanges}
              type="text"
            />
            <input
              onClick={callSearchFunction}
              type="submit"
              value="SEARCH"
            />
          </form>
        </div>
      </section>
      <section className="movies">
        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          // <div className="errorMessage">{errorMessage}</div>
          <p>{errorMessage}</p>
        ) : (
          brands.map((brand, index) => (
            <Card key={index} product={brand} />
          ))
        )}
      </section>
    </>
  );
};
