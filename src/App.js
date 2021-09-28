
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import popper from 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import CarouselContainer from './containers/CarouselContainer';
import ProductContainer from './containers/ProductContainer'
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import CartContainer from './containers/CartContainer';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <CarouselContainer />
          <ProductContainer />
        </Route>
      </Switch>
      <Route exact path="/cart">
        <CartContainer />
      </Route>
    </div>
  );
}

export default App;
