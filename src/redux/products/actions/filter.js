import * as actionTypes from "./constants";
import mockAPi from "../../../api/MockApi";

export const searchProduct = (data) => async (dispatch) => {
  const response = await mockAPi.get(`/products?search=${data}`);
  dispatch({ type: actionTypes.SEARCH, payload: response.data });
};

export const increaseItemQuantity = (data) => {
  return {
    type: actionTypes.FILTER,
    payload: data,
  };
};

export const sortLowToHigh = (data) => async (dispatch) => {
  if (data === "sort by price: low to high") {
    const response = await mockAPi.get("/products?sortBy=rate&order=asc");
    dispatch({ type: "SORT_BY_PRICE", payload: response.data });
  } else if (data === "sort by price: high to low") {
    const response = await mockAPi.get("/products?sortBy=rate&order=desc");
    dispatch({ type: "SORT_BY_PRICE", payload: response.data });
  } else {
    const response = await mockAPi.get(`/products`);
    dispatch({ type: "SORT_BY_PRICE", payload: response.data });
  }
};

export const priceRange = (data) => {
  return {
    type: actionTypes.SORT_BY_PRICE_RANGE,
    payload: data,
  };
};

export const filterByRange = (data) => {
  return {
    type: actionTypes.FILTER_BY_RANGE,
    payload: data,
  };
};

export const filtersByBrands = (data) => {
  return {
    type: "FILTERS_BY_BRANDS",
    payload: data,
  };
};

export const removeByBrand = (data) => {
  return {
    type:"REMOVE_BY_BRAND",
    payload:data
  }
}
