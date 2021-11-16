import * as actionTypes from "../actions/constants";

const initialState = {
  data: [],
  counter: 0,
  cart: [],
  total: 0,
  saving: true,
  isAdded: false,
  filterdArr: [],
  buyItems: [],
  itemDetail: {},
  filterByBrandNames: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDTOCART:
      return {
        ...state,
        counter: state.cart.length + 1,
        isAdded: true,
      };
    case actionTypes.DELETE_ITEM:
      let newCart = state.cart.filter((item) => item.id !== action.payload.id);
      let newTotal = 0;
      for (let i = 0; i < newCart.length; i++) {
        newTotal += newCart[i].rate;
      }
      return {
        ...state,
        cart: newCart,
        total: newTotal,
        counter: newCart.length,
      };

    case actionTypes.SEARCH:
      return {
        ...state,
        filterdArr: [...action.payload],
      };

    case actionTypes.FILTER:
      let newArr = [];
      newArr = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            rate1: item.rate * parseInt(action.payload.selected),
            selected: parseInt(action.payload.selected),
          };
        }
        return item;
      });
      let total = 0;
      for (let item of newArr) {
        total += item.rate1 || item.rate;
      }
      return {
        ...state,
        cart: newArr,
        total: total,
      };

    case actionTypes.GET_DATA:
      return {
        ...state,
        data: [...action.payload],
        saving: false,
        filterdArr: [...action.payload],
      };

    case actionTypes.GET_ITEMS:
      let cart = [...action.payload];
      let cartItems = cart.filter(
        (product, index, self) =>
          index ===
          self.findIndex(
            (t) =>
              t.heading === product.heading &&
              t.rate === product.rate &&
              t.text === product.text &&
              t.src === product.src
          )
      );
      let newTotals = 0;
      for (let item of cartItems) {
        newTotals += item.rate;
      }
      return {
        ...state,
        cart: cartItems,
        counter: cartItems.length,
        total: newTotals,
        saving: false,
      };
    case actionTypes.SORT_BY_PRICE:
      return {
        ...state,
        filterdArr: [...action.payload],
      };
    case actionTypes.SORT_BY_PRICE_RANGE:
      let priceRange = action.payload.split("-");
      let priceRangeItems = state.filterdArr.filter(
        (item) =>
          item.rate >= parseInt(priceRange[0]) &&
          item.rate <= parseInt(priceRange[1])
      );
      return {
        ...state,
        filterdArr: [...priceRangeItems],
      };
    case "GET_BUY_ITEMS":
      return {
        ...state,
        buyItems: [...action.payload],
      };
    case "ITEM_DETAIL":
      return {
        ...state,
        itemDetail: { ...action.payload },
      };
    case actionTypes.FILTER_BY_RANGE:
      let filteredByRangeItems = state.data.filter(
        (item) => item.rate > parseInt(action.payload)
      );
      return {
        ...state,
        filterdArr: [...filteredByRangeItems],
      };
    case "FILTERS_BY_BRANDS":
      let lebels = action.payload.label;
      let filtersByBrands = state.data.filter((item) =>
        item.text.includes(lebels)
      );
      return {
        ...state,
        filterdArr: [...state.filterByBrandNames, ...filtersByBrands],
        filterByBrandNames: [...filtersByBrands],
      };
    case "GET_PRODUCTS_BY_PAGE":
      return {
        ...state,
        filterdArr: [...action.payload],
      };
    case "REMOVE_BY_BRAND":
      if (action.payload === undefined) {
        return {
          ...state,
          filterdArr: [...state.data],
        };
      }
      let removeByBrands = state.data.filter((item) =>
        item.text.includes(action.payload.label)
      );
      return {
        ...state,
        filterdArr: [...removeByBrands],
      };

    default:
      return state;
  }
};

export default productReducer;
