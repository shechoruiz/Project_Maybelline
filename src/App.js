// ------------------------------ import libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// ------------------------------ import components
import { Home } from './pages/Home';
import { Aboutt } from './pages/About';
import { Brands } from './pages/Brands';
import { ProdTypes } from './pages/ProdTypes';

// ------------------------------ import styles and images
// import logo from './logo.svg';
import './assets/styles/App.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Aboutt} />
          <Route exact path="/brands" component={Brands} />
          <Route exact path="/prod_types" component={ProdTypes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
