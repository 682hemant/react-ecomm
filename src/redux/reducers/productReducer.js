import { Data } from '../../Data'
const initialState = {
  data: Data,
  counter: 0
}

const productReducer = (state = initialState, action) => {
  if(action.type === "ADDTOCART"){
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  return state;
}

export default productReducer;