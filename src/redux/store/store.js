import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import productReducer from "../products/reducers/productReducer";
import wishListreducer from "../wishlist/reducer";
import authReducer from "../auth/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  prodReducer: productReducer,
  wishListReducer: wishListreducer,
  authReducer: authReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
export default store;
