import * as actionTypes from "./constants";

const initialState = {
  wishlist: [],
  copiedWishlist: [],
  saving: true,
};

const wishListreducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WISHLIST:
      return {
        ...state,
      };
    case actionTypes.GET_WISHLIST_ITEMS:
      return {
        ...state,
        wishlist: [...action.payload],
        copiedWishlist: [...action.payload],
        saving: false,
      };
    case "SORT_BY_DATE":
      let priceRangeItems = state.copiedWishlist.filter(
          (item) =>
            new Date(item.date) >= new Date(action.payload.startDate) &&
            new Date(item.date) <= new Date(action.payload.endDate)
        );
      return {
        ...state,
        wishlist: [...priceRangeItems],
      };
      case "DELETE_ITEM":
        const filteredWishList = state.wishlist.filter(item => item.id !== action.payload.id);
        return {
          ...state,
          wishlist:[...filteredWishList]
        }
    default:
      return state;
  }
};

export default wishListreducer;
