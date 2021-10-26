import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import FetchTest from './components/FatchTest';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Cart" component={ Cart } />
          <Route
            path="/ProductDetails/:category/:id/:query" component={ ProductDetails }
          />
          <Route exact path="/FatchTest" component={ FetchTest } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
