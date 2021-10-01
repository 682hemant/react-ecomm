import  * as actionTypes from './constants'; 

export const searchProduct = (data) => {
    return {
      type: actionTypes.SEARCH,
      payload: data,
    };
  };
  
  export const increaseItemQuantity = (data) => {
    return {
      type: actionTypes.FILTER,
      payload: data,
    };
  };