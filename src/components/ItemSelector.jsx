// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import icono1 from '../assets/images/Icono1-ProductTypes.png';
import '../assets/styles/ItemSelector.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const ItemSelector = () => {
  return (
    <button className="itemSelector">
      <div className="iconSelector">
        <img src={icono1} alt="Icon Product"/>
      </div>
      <div className="titleSelector">
        <p>Product Types</p>
      </div>
      <p className="descriptionSelector">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ut magnam eius cumque ab sit ea, nemo vel quis officiis incidunt? Veritatis nobis perferendis explicabo.</p>
    </button>
  );
};
