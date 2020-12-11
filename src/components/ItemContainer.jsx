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
        description="The type of makeup being searched for (ie. lipstick, eyeliner). See list of product types below. Will return a list of all products of this type."
      />
      <ItemSelector
        link="brands"
        icon={icon2}
        title="BRANDS"
        description="Brand of the product. Consult the list of products according to the brand. It will return all the products of each brand."
      />
    </section>
  );
};