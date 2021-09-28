import { createStore,applyMiddleware,compose } from 'redux';
import logger from 'redux-logger';
import productReducer from '../reducers/productReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(productReducer,composeEnhancers(applyMiddleware(logger)));
export default store;