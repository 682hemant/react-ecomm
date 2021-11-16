import mockAPi from "../../../api/MockApi";
import * as actionTypes from "./constants";

export const addTooCart = (id) => async (dispatch) => {
  const response = await mockAPi.get(`/products/${id}`);
  await mockAPi.post("/cart", response.data);
  const cartResponse = await mockAPi.get(`/cart`);
  return dispatch({
    type: actionTypes.ADDTOCART,
    payload: cartResponse.data.length,
  });
};

export const deleteCartItem = (id) => async (dispatch) => {
  const response = await mockAPi.delete(`/cart/${id}`);
  return dispatch({ type: actionTypes.DELETE_ITEM, payload: response.data });
};

export const getProducts = () => async (dispatch) => {
  const response = await mockAPi.get("/products");
  return dispatch({ type: actionTypes.GET_DATA, payload: response.data });
};

export const getCartItems = () => async (dispatch) => {
  const response = await mockAPi.get(`/cart`);
  return dispatch({ type: actionTypes.GET_ITEMS, payload: response.data });
};

export const buyItems = (id) => async (dispatch) => {
  const response = await mockAPi.get(`/products/${id}`);
  let data = {
    text: response.data.text,
  };
  await mockAPi.post(`/buy`, data);
  return dispatch({ type: "BUY_ITEMS" });
};

export const getBuyItems = () => async (dispatch) => {
  const response = await mockAPi.get(`/buy`);
  dispatch({ type: "GET_BUY_ITEMS", payload: response.data });
};

export const getItemDetail = (id) => async (dispatch) => {
  const response = await mockAPi.get(`/products/${id}`);
  dispatch({ type: "ITEM_DETAIL", payload: response.data });
};

// export const getProductsByPage = (pageNumber) => async dispatch => {
//   const response = await mockAPi.get(`/products/?page=${parseInt(pageNumber)}&limit=8`);
//   dispatch({type:"GET_PRODUCTS_BY_PAGE", payload:response.data})
// }
