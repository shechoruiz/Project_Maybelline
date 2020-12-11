// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import '../assets/styles/Card.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Card = ({ name, brand, image, productLink, description }) => {
  return (
    <div className="card">
      <img className="item-image" src={image} alt="" width="200px" />
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Brand:</b> {brand}
      </p>
      {/* <p>Description: {description}</p> */}
      <a className="buttonStyle" href={productLink} target="_blank">
        Look at the product
      </a>
    </div>
  );
};
