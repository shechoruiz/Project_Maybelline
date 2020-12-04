// ------------------------------ import components
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// ------------------------------ import styles and images
// import logo from './logo.svg';
import './assets/styles/App.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
