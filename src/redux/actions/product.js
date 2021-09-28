export const addTooCart = (id) => {
  return {
    type: "ADDTOCART",
    payload:{id}
  }
}

export const deleteCartItem = id =>{
  return {
    type:'DELETE_ITEM',
    payload:{id}
  }
}

export const searchProduct= data =>{
  return {
    type:'SEARCH',
    payload: data
  }
}

export const increaseItemQuantity = data =>{
  console.log(data);
  return {
    type:'FILTER',
    payload: data
  }
}