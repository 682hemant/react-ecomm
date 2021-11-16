import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

import Card from "../../assets/styles/Card.style";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, src, heading, text, rate } = props.product;
  return (
    <div className="col-lg-3 col-md-6 col-12 pe-1 pt-3">
      <Card>
        <Link className="text-decoration-none" to={`/details/${id}`}>
          <img className="img-fluid" alt="prodcuts" src={src} />
        </Link>
        <div className="card-inner">
          <div className="d-flex justify-content-between">
            <h6 className="text-black">{heading}</h6>
            <i
              style={{ cursor: "pointer" }}
              onClick={() => props.addToWishListHandler(id)}
              className="las la-heart text-black"
            ></i>
          </div>
          <ParagraphContainer>
            <p className="text-black">{text}</p>
          </ParagraphContainer>
          <p className="text-black">Price Rs. {rate}</p>
        </div>
        <div className="d-flex justify-content-between card-inner">
          <Button
            className="add-btn"
            onClick={() => props.addToCartHandler(id)}
          >
            <i className="las la-shopping-cart"></i>
            <span>Add</span>
          </Button>
          <Button className="buy-btn" onClick={() => props.buyHandler(id)}>
            <i className="las la-shopping-bag"></i>
            <span>Buy</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Product;

const ParagraphContainer = styled.div`
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
