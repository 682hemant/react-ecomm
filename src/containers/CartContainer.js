import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import ContainerWrapper from '../assets/styles/ContainerWrapper';
import { addTooCart, getCartItems } from '../redux/actions/product'

const CartContainer = ({ cart, counter, total, dispatch }) => {
  
	useEffect(() => {
		dispatch(getCartItems())
	}, [])
  let messege = "";
  if (cart.length === 0) {
    messege = <h4 className="my-4"> Your cart is empty please add item to the cart</h4>;
  }

  return (
    <ContainerWrapper>
      <div className="container">
        {messege}
        <div className="row">
          <Cart items={cart} total={total} counter={counter} />
        </div>
      </div>
    </ContainerWrapper>
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
