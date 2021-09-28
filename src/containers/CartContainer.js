import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { deleteCartItem } from '../redux/actions/product';

const CartContainer = ({ cart, counter, total, dispatch }) => {

  const removeCartItemHandler = (id) => {
    dispatch(deleteCartItem(id))
  }

  let messege = "";
  if (cart.length === 0) {
    messege = <h4 className="mt-4"> your cart is empty please add item to the cart</h4>;
  }
  return (
    <div style={{background:"#f1f3f6",minHeight:"98vh"}}>
      <div class="container" style={{ paddingTop: "7rem" }}>
        <div className="d-flex justify-content-between">
          <h4>My cart ({counter})</h4>
          <h4 className="mx-auto" style={{paddingLeft:"12rem"}}>Price detail</h4>
        </div>
        {messege}
        <div className="row">
          {cart.map(item => <Cart item={item} total={total} removeCartItem={removeCartItemHandler} />)}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <h6 style={{marginLeft:"20rem"}}>Cart total is {total}</h6>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    counter: state.counter,
    total: state.total
  }
}

export default connect(mapStateToProps)(CartContainer)
