// ------------------------------ import components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ItemContainer } from './components/ItemContainer';
import { SelectProducts } from './components/SelectProducts';

// ------------------------------ import styles and images
// import logo from './logo.svg';
import './assets/styles/App.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero />
      <ItemContainer /> */}
      <SelectProducts />
      <Footer />
    </div>
  );
}

export default App;
