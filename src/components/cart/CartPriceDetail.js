import React from "react";

const CartPriceDetail = ({ item }) => {
  const { heading, rate1, rate, selected } = item;

  return (
    <tr>
      <td>{`${heading} X ${selected || 1}`}</td>
      <td>₹{rate1 || rate}</td>
    </tr>
  );
};
export default CartPriceDetail;
