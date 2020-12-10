// ------------------------------ import libraries
import React, { useState } from 'react';

// ------------------------------ import components
// import BRANDS from '../utils/brands';

// ------------------------------ import styles and images
import '../assets/styles/Card.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Card = ({ product }) => {
  const poster = product.image_link;
    // product.image_link === 'N/A'
    //   ? DEFAULT_PLACEHOLDER_IMAGE
    //   : product.image_link;
  return (
    <div className="movie">
      <h2>{product.name}</h2>
      <div>
        <img
          width="200"
          alt={`Product: ${product.name}`}
          src={poster}
        />
      </div>
      <p>({product.brand})</p>
      <p>({product.description})</p>
    </div>
  );
};
