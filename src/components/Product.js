import React from 'react'
import { connect } from 'react-redux';

import Card from '../assets/styles/Card.style'
import { addTooCart } from '../redux/actions/product';

const Product = (props) => {
  console.log(props);
  const { src, heading, text, rate } = props.product
  const addToCartHandler =()=>{
    props.dispatch(addTooCart())
  }
  return (
    <Card className="col-lg-3 col-md-6 col-12">
      <img class="img-fluid" src={src} />
      <div className="card-inner">
        <h6>{heading}</h6>
        <p>{text}</p>
        <p>Price Rs. {rate}</p>
        <div className="d-flex justify-content-between">
          <button className="add-btn" onClick={addToCartHandler} ><i className="las la-shopping-cart"></i><span>Add</span></button>
          <button className="buy-btn"><i className="las la-shopping-bag"></i><span>Buy</span></button>
        </div>
      </div>
    </Card>
  )
}

export default connect()(Product)
