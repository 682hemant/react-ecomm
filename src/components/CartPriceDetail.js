import React from 'react'

const CartPriceDetail = ({ item }) => {
  const { heading, rate } = item
  return (
    <tr>
      <td>{heading}</td>
      <td>{rate}</td>
    </tr>
  )
}
export default CartPriceDetail;
