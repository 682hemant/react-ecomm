import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import popper from 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import CarouselContainer from './containers/CarouselContainer';
import ProductContainer from './containers/ProductContainer'
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <CarouselContainer />
      <ProductContainer />
    </div>
  );
}

export default App;
