import * as actionTypes from '../actions/constants'

const initialState = {
	data: [],
	counter: 0,
	cart: [],
	total: 0,
	saving: true,
	isAdded:false,
  filterdArr:[]
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADDTOCART:
			return {
				...state,
				counter: state.cart.length + 1,
				isAdded: true
			}
		case actionTypes.DELETE_ITEM:
			let newCart = state.cart.filter(item => item.id !== action.payload.id)
			let newTotal = 0;
			for (let i = 0; i < newCart.length; i++) {
				newTotal += newCart[i].rate;
			}
			return {
				...state,
				cart: newCart,
				total: newTotal,
				counter: newCart.length,
			}

		case actionTypes.SEARCH:
			let filterdArr = state.data.filter(item => {
				if (item.heading.toLowerCase().includes(action.payload.toLowerCase())) {
					return item
				}
			}
			)
			return {
				...state,
				filterdArr: filterdArr
			}

		case actionTypes.FILTER:
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

		case actionTypes.GET_DATA:
			return {
				...state,
				data: [...action.payload],
				saving: false,
        filterdArr:[...action.payload]
			}

		case actionTypes.GET_ITEMS:
			let cart = [...action.payload]
			let cartItems = [...new Set(cart)]
			let newTotals = 0;
			for (let item of cartItems) {
				newTotals += item.rate
			}
			return {
				...state,
				cart: cartItems,
				counter: cartItems.length,
				total: newTotals,
				saving: false
			}
		default:
			return state
	}
}

export default productReducer;