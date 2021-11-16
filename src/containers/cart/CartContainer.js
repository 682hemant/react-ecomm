import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "../../components/cart/Cart";
import ContainerWrapper from "../../assets/styles/ContainerWrapper";
import { getCartItems } from "../../redux/products/actions/index";
import { cartConsts } from "../../constants/cart";

const CartContainer = () => {
  const isSaving = useSelector((state) => state.prodReducer.saving);
  const cart = useSelector((state) => state.prodReducer.cart);
  const counter = useSelector((state) => state.prodReducer.counter);
  const total = useSelector((state) => state.prodReducer.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  let messege = "";
  if (cart.length === 0 && !isSaving) {
    messege = (
      <div>
        <img
          alt="cart empty image"
          style={{ width: "15rem" }}
          src="https://image.shutterstock.com/image-vector/shopping-cart-isolated-on-white-600w-1936904890.jpg"
        />
        <h4 className="my-4">{cartConsts.cartEmptyMessege}</h4>
      </div>
    );
  }

  return (
    <ContainerWrapper>
      <section className="container">
        <div className="row">
          <Cart
            items={cart}
            total={total}
            counter={counter}
            isSaving={isSaving}
            messege={messege}
          />
        </div>
      </section>
    </ContainerWrapper>
  );
};

export default CartContainer;
