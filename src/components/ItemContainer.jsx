// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { ItemSelector } from './ItemSelector';

// ------------------------------ import styles and images
import '../assets/styles/ItemContainer.scss';
import icon1 from '../assets/images/Icono1-ProductTypes.png';
import icon2 from '../assets/images/Icono2-Brands.png';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const ItemContainer = () => {
  return (
    <section className="itemContainer">
      <div className="titleContainer">
        <h1>CHOOSE BY</h1>
      </div>
      <ItemSelector
        link="prod_types"
        icon={icon1}
        title="PRODUCT TYPES"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere veniam similique ad. Quia, corrupti."
      />
      <ItemSelector
        link="brands"
        icon={icon2}
        title="BRANDS"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere veniam similique ad. Quia, corrupti."
      />
    </section>
  );
};