import { Data } from '../../Data'

const initialState = {
  data: Data,
  counter: 0,
  cart: [],
  total: 0,
}

const productReducer = (state = initialState, action) => {
  if (action.type === "ADDTOCART") {
    let newCart = [];
    state.data.map(item => {
      if (item.id === action.payload.id) {
        newCart = [...state.cart, item];
        return newCart;
      }
    })
    alert('Item added to the cart')
    let newArr = [...new Set(newCart)]
    let newTotal = 0
    newArr.map(item => {
      newTotal = state.total + item.rate
    })
    return {
      ...state,
      cart: newArr,
      counter: newArr.length,
      total: newTotal,
    }
  }
  if (action.type === "DELETE_ITEM") {
    let newCart = state.cart.filter(item => item.id !== action.payload.id)
    let newTotal = 0;
    for (let i = 0; i < newCart.length; i++) {
      newTotal += newCart[i].rate;
    }
    return {
      ...state,
      cart: newCart,
      total: newTotal,
      counter: newCart.length
    }
  }
  if (action.type === 'SEARCH') {
    console.log(action.payload);
    let filterdArr = state.data.filter(item => item.heading.toLowerCase().includes(action.payload.toLowerCase()))
    return {
      ...state,
      data: filterdArr
    }
  }
  if (action.type === "FILTER") {
    let newArr = []
     newArr = state.cart.map(item => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          rate: item.rate * parseInt(action.payload.selected)
        }
      }
    })
    console.log(newArr);
    let total = 0;
    for (let item of newArr) {
       total += item.rate
    }
    return {
      ...state,
      cart: newArr,
      total: total
    }
  }
  return state;
}

export default productReducer;