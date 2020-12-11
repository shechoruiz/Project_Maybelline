// ------------------------------ import libraries
import React, { useContext } from 'react';

// ------------------------------ import components
import { Card } from './Card';
import { SearchBar } from './SearchBar'
import { MakeupContext } from '../utils/MakeupContext';

// ------------------------------ import styles and images
import '../assets/styles/SelectBrands.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const SelectBrands = () => {
  const { makeUpItems } = useContext(MakeupContext);

  return (
    <>
      <div className="titleBrands">
        <h1>BRANDS</h1>
      </div>
      <SearchBar />
      <div className="makeUpItems">
        {makeUpItems.map((makeUpItem) => (
          <Card
            key={makeUpItem.id}
            name={makeUpItem.name}
            brand={makeUpItem.brand}
            image={makeUpItem.image_link}
            productLink={makeUpItem.product_link}
            description={makeUpItem.description}
          />
        ))}
      </div>
    </>
  );
};
