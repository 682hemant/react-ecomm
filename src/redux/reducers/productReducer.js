

const initialState = {
  data: [],
  counter: 0,
  cart: [],
  total: 0,
  saving: true,
  isAdded : false,
}

const productReducer = (state = initialState, action) => {
  if (action.type === "ADDTOCART") {
    return {
      ...state,
      counter: state.counter + 1,
      isAdded : true
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
      return item;
    })
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
  if(action.type === "GET_DATA"){
    return {
      ...state,
      data:[ ...action.payload],
      saving:false
    }
  }
  if(action.type === 'GET_ITEMS'){
    let cart = [...action.payload]
    let cartItems = [...new Set(cart)]
    let newTotal = 0;
    for(let item of cartItems){
      newTotal += item.rate
    }
    return {
      ...state,
      cart: cartItems,
      counter: cartItems.length,
      total:newTotal
    }
  }
  return state;
}

export default productReducer;