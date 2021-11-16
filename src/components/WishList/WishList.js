import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Card from "../../assets/styles/Card.style";
import { PopupModal } from "../shared/PopupModal";
import { deleteWishListItem } from "../../redux/wishlist/index";

export const WishList = ({ wishlist }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const { id, src, rate, text, heading, date } = wishlist;

  const deleteHandler = () => {
    dispatch(deleteWishListItem(id));
  };
  const handleClose = () => setShow(false);
  const removeItemHandler = () => setShow(true);

  return (
    <>
      <PopupModal
        show={show}
        handleClose={handleClose}
        deleteHandler={deleteHandler}
      />
      <div className="col-lg-3 col-md-6 col-12 pt-3">
        <Card>
          <img className="img-fluid" src={src} alt="wishlist image" />
          <div className="p-2">
            <div className="d-flex justify-content-between">
              <h6>{heading}</h6>
              <i
                className="las la-trash-alt curser-pointer"
                onClick={removeItemHandler}
              ></i>
            </div>
            <p>{rate}</p>
            <p>{text}</p>
            <p>{date}</p>
          </div>
        </Card>
      </div>
    </>
  );
};
