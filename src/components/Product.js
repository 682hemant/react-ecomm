import React from 'react'
import { connect } from 'react-redux';

import Card from '../assets/styles/Card.style'
import { addTooCart } from '../redux/actions/product';
import Button from 'react-bootstrap/Button'

const Product = (props) => {
  const {id, src, heading, text, rate } = props.product
  const addToCartHandler = (id) => {
    props.dispatch(addTooCart(id))
  }
  return (
    <Card className="col-lg-3 col-md-6 col-12">
      <img className="img-fluid" src={src} />
      <div className="card-inner">
        <h6>{heading}</h6>
        <p>{text}</p>
        <p>Price Rs. {rate}</p>
        <div className="d-flex justify-content-between">
          <Button variant="warning" onClick={()=>addToCartHandler(id)} ><i className="las la-shopping-cart"></i><span>Add</span></Button>
          <Button variant="danger"><i className="las la-shopping-bag"></i><span>Buy</span></Button>
        </div>
      </div>
    </Card>
  )
}

export default connect()(Product)
