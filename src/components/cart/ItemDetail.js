import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PopupModal } from "../shared/PopupModal";
import styled from "styled-components";

import { deleteCartItem } from "../../redux/products/actions/index";
import { Button } from "../shared/Button";

const ItemDetail = ({ item, changeSelected }) => {
  const { id, src, heading, text, rate } = item;

  const [options] = useState([1, 2, 3, 4, 5]);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);

  const removeCartItemHandler = () => {
    setShow(true);
  };
  const deleteHandler = () => {
    dispatch(deleteCartItem(id));
    setShow(false);
  };

  return (
    <>
      <PopupModal
        show={show}
        handleClose={handleClose}
        deleteHandler={deleteHandler}
      />
      <div className="d-flex flex-md-row flex-column mt-4 w-100">
        <Img src={src} alt="cart item" />
        <div className="d-flex flex-column ms-md-5 ms-0 w-100 mt-md-0 mt-4">
          <div className="d-flex justify-content-between align-items-center w-100">
            <h6 className="mb-0">{heading}</h6>
            <select
              className="form-select w-0"
              value={item.selected}
              aria-label="Default select example"
              onChange={(e) => changeSelected(e, item)}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <Button
              classes="bg-white text-primary border-0"
              clickHandler={removeCartItemHandler}
              label="delete"
            />
          </div>
          <p>{text}</p>
          <span>Price:₹{rate}</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ItemDetail;

const Img = styled.img`
  width: 12.5rem;
  @media (max-width:568px){
    width: 100%;
  }
`;
