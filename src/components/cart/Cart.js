import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import "../../../src/App.css";
import styled from "styled-components";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

import CartPriceDetail from "./CartPriceDetail";
import ItemDetail from "./ItemDetail";
import Spinners from "../shared/Spinner";
import Button from "../../assets/styles/Button";
import { increaseItemQuantity } from "../../redux/products/actions/index";
import { cartConsts } from "../../constants/cart";

const Cart = ({ items, total, counter, isSaving, messege }) => {
  const [selected] = useState(1);
  const dispatch = useDispatch();

  const selectedHandler = (e, item) => {
    dispatch(increaseItemQuantity({ id: item.id, selected: e.target.value }));
  };

  return (
    <>
      <div className="col-lg-6 col-12 bg-white p-4 rounded">
        <h4>
          {cartConsts.cartHeading} ({counter})
        </h4>
        {items.map((item) => (
          <ItemDetail
            item={item}
            selected={selected}
            changeSelected={selectedHandler}
          />
        ))}
        {messege}
        {isSaving && <Spinners />}
        {items.length >= 1 && (
          <Stack direction="horizontal" gap={3}>
            <Button className="ms-auto">
              <Link to="/viewcart" className="text-decoration-none text-white">
                Place order{" "}
              </Link>
            </Button>
          </Stack>
        )}
      </div>
      <PriceDetail className="col-lg-4 col-12 bg-white p-4 rounded mt-md-0 mt-4">
        <h4>{cartConsts.priceDetailHeading}</h4>
        <table className="table">
          {items.map((item) => (
            <tbody key={item.id}>
              <CartPriceDetail item={item} selected={selected} />
            </tbody>
          ))}
        </table>
        <CartTotal>
          {cartConsts.cartTotalHeading} ₹{total}
        </CartTotal>
      </PriceDetail>
    </>
  );
};

export default connect()(Cart);

const PriceDetail = styled.div`
  margin-left: 6.25rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
const CartTotal = styled.h6`
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
