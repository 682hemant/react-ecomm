import MockApi from "../../api/MockApi";
import { convertDate } from "../../utils/utility";
import * as actionTypes from "./constants";

export const wishList = (id) => async (dispatch) => {
  const response = await MockApi.get(`/products/${id}`);
  response.data["date"] = convertDate(new Date());
  const sendToCart = await MockApi.post("/wishlists", response.data);
  return dispatch({
    type: actionTypes.GET_WISHLIST,
    payload: { isAdded: sendToCart.data.isAdded, id: sendToCart.data.id },
  });
};

export const wishListItems = () => async (dispatch) => {
  const response = await MockApi.get(`/wishlists`);
  return dispatch({
    type: actionTypes.GET_WISHLIST_ITEMS,
    payload: response.data,
  });
};

export const sortByDate = (data) => {
  return {
    type: "SORT_BY_DATE",
    payload: data,
  };
};

export const deleteWishListItem = id  => async dispatch =>  {
  const response = await MockApi.delete(`/wishlists/${id}`);
  return dispatch({type:"DELETE_ITEM",payload:response.data})
}
