// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Header } from '../components/Header';
import { SelectProducts } from '../components/SelectProducts';
import { Footer } from '../components/Footer';

// ------------------------------ import styles and images
// import heroImg from '../assets/images/hero_1.jpg';
// import '../assets/styles/Hero.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const ProdTypes = () => {
  return (
    <>
      <Header />
      <SelectProducts />
      <Footer />
    </>
  );
};
