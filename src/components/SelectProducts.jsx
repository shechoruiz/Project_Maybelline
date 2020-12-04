// ------------------------------ import libraries
import React, { useState } from 'react';

// ------------------------------ import components
import BRANDS from '../utils/brands'

// ------------------------------ import styles and images
import '../assets/styles/SelectProducts.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const SelectProducts = () => {
  return (
    <section className="selectProducts">
      <div className="titleProducts">
        <h1>PRODUCTS TYPES</h1>
      </div>
      <div className="selectionProducts">
        <p>Select your option:</p>
        <select name="Brands" id="brands" className="brands">
          {BRANDS.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.replace(/^\w/, (c) => c.toUpperCase())}
            </option>
          ))}
        </select>
        <button>Search</button>
      </div>
    </section>
  );
};
