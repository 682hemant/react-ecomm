import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import CarouselContainer from "./containers/CarouselContainer";
import Navbar from "./components/Navbar";
import CartContainer from "./containers/cart/CartContainer";
import ViewCart from "./containers/ViewCart";
import PaginationContainer from "./containers/paginationContainer";
import { WishListContainers } from "./containers/wishlist/WishListContainers";
import ChartContainer from "./containers/charts/ChartContainer";
import ProductDetailsContainer from "./containers/products/ProductDetailsContainer";
import { SignUp } from "./components/auth/SignUp";
import { LogIn } from "./components/auth/LogIn";

function App() {
  const isLoggedIn = useSelector(
    (state) => state.authReducer.user.isAunthenticate
  );
  return (
    <div>
      <Switch>
        {isLoggedIn === false && (
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        )}
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
        <Route exact path="/">
          <Navbar />
          <CarouselContainer />
          <PaginationContainer />
        </Route>
        <Route exact path="/cart">
          <Navbar />
          <CartContainer />
        </Route>
        <Route exact path="/viewcart">
          <Navbar />
          <ViewCart />
        </Route>
        <Route exact path="/wishlist">
          <Navbar />
          <WishListContainers />
        </Route>
        <Route exact path="/analytics">
          <Navbar />
          <ChartContainer />
        </Route>
        <Route exact path="/details/:id">
          <Navbar />
          <ProductDetailsContainer />
        </Route>
        <Route exact path="/:pagenumber">
          <Navbar />
          {/* <ProductContainer /> */}
          <PaginationContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
