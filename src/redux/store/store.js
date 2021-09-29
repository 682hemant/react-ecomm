import { createStore,applyMiddleware,compose } from 'redux';
import logger from 'redux-logger';
import productReducer from '../reducers/productReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(productReducer,composeEnhancers(applyMiddleware(thunk,logger)));
export default store;