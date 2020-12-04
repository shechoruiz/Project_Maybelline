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
      <ItemSelector />
      <ItemSelector />
    </section>
  );
};
