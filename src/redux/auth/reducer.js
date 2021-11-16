import * as actionTypes from './constants'

const initialState = {
  users:[],
  username: "",
  user:{},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP:
      return {
        ...state,
      };
    case actionTypes.LOG_IN:
      return {
        ...state,
        users:[...action.payload],
        user: action.payload.find(user => user.isAunthenticate === true),
      }
      case actionTypes.LOG_OUT: 
      return {
        ...state,
        user:{...action.payload},
      }
      case actionTypes.GET_USER_NAME:
        return {
          ...state,
          user:{...action.payload}
        }
    default:
      return state;
  }
};

export default authReducer;
