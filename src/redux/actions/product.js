import mockAPi from "../../api/MockApi";
import { toaster } from '../../components/utility';
import  * as actionTypes from './constants'; 

export const addTooCart = id => async dispatch => {
  toaster();
  const response = await mockAPi.get(`/products/${id}`);
  const sendToCart = await mockAPi.post('/cart',response.data);
  const cartResponse = await mockAPi.get(`/cart`);
  return dispatch({type: actionTypes.ADDTOCART,payload:cartResponse.data.length})
};

export const deleteCartItem = id => async dispatch => {
  const response = await mockAPi.delete(`/cart/${id}`);
  return dispatch({type: actionTypes.DELETE_ITEM ,payload:response.data})
};

export const getProducts = () => async dispatch => {
  const response = await mockAPi.get("/products");
  return dispatch({ type: actionTypes.GET_DATA, payload: response.data });
};

export const getCartItems = () => async dispatch => {
  const response = await mockAPi.get(`/cart`);
  return dispatch({type:actionTypes.GET_ITEMS,payload:response.data})
} 
