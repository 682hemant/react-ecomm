import mockAPi from "../../api/MockApi";
import { toaster } from '../../components/utility';

// export const addTooCart = (id) => {
//   
//   return {
//     type: "ADDTOCART",
//     payload: { id },
//   };
// };
export const addTooCart = id => async dispatch => {
  const response = await mockAPi.get(`/products/${id}`);
  const sendToCart = await mockAPi.post('/cart',response.data);
  const getItem = await mockAPi.get(`/cart`);
  toaster();
  return dispatch({type: "ADDTOCART", payload:getItem.data})
};

// export const deleteCartItem = (id) => {
//   return {
//     type: "DELETE_ITEM",
//     payload: { id },
//   };
// };
export const deleteCartItem = id => async dispatch => {
  const response = await mockAPi.delete(`/cart/${id}`);
  dispatch({type: "DELETE_ITEM",payload:response.data})
};


export const searchProduct = (data) => {
  return {
    type: "SEARCH",
    payload: data,
  };
};

export const increaseItemQuantity = (data) => {
  console.log(data);
  return {
    type: "FILTER",
    payload: data,
  };
};

export const getProducts = () => async dispatch => {
  const response = await mockAPi.get("/products");
  return dispatch({ type: "GET_DATA", payload: response.data });
};

export const getCartItems =() => async dispatch => {
  const response = await mockAPi.get(`/cart`);
  dispatch({type:'GET_ITEMS',payload:response.data})
} 
