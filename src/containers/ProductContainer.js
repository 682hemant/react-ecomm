import React from 'react'
import { connect } from 'react-redux';

import Product from '../components/Product';

const ProductContainer = ({ products }) => {
  return (
    <div className="row mx-0">
      {products.map(product => <Product product={product} />)}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    products: state.data
  }
}

export default connect(mapStateToProps)(ProductContainer);
