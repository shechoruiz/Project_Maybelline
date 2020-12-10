// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Header } from '../components/Header';
import { SelectBrands } from '../components/SelectBrands';
import { Footer } from '../components/Footer';

// ------------------------------ import styles and images
// import heroImg from '../assets/images/hero_1.jpg';
// import '../assets/styles/Hero.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Brands = () => {
  return (
    <>
      <Header />
      <SelectBrands />
      <Footer />
    </>
  );
};
