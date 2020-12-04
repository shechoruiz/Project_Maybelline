// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { ItemSelector } from './ItemSelector';

// ------------------------------ import styles and images
import '../assets/styles/ItemContainer.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const ItemContainer = () => {
  return (
    <section className="itemContainer">
      <div className="titleContainer">
        <h1>CHOOSE BY</h1>
      </div>
      <ItemSelector />
      <ItemSelector />
    </section>
  );
};
