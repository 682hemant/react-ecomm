import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { WishList } from "../../components/WishList/WishList";
import { wishListItems } from "../../redux/wishlist/index";
import ContainerWrapper from "../../assets/styles/ContainerWrapper";
import Datepicker from "../../components/datepicker/Datepicker";
import { wishListConsts } from "../../constants/wishlists";
import { Skeleton } from "../../components/shared/Skeleton";

export const WishListContainers = () => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const wishLists = useSelector((state) => state.wishListReducer.wishlist);
  const isSaving = useSelector((state) => state.wishListReducer.saving);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wishListItems());
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsItemAdded(false);
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [isItemAdded]);

  // const modalRemoveHandler = () => {
  //   setIsItemAdded(false);
  // };

  return (
    <ContainerWrapper>
      <div className="d-flex flex-md-row flex-column justify-content-between mx-2">
        <h3>
          {wishListConsts.dashboardHeading}({wishLists.length})
        </h3>
        <div className="d-flex flex-md-row flex-column align-items-center">
          <h6 className="mb-0 me-2">Filter by date:</h6>
          <Datepicker />
        </div>
      </div>
      <div className="row mx-0">{isSaving && <Skeleton />}</div>
      <div className="row mx-2 my-4">
        <div className="d-flex justify-content-center align-items-center">
          {wishLists.length === 0 && wishListConsts.emptyWishlistMessege}
        </div>
        {wishLists.map((wishlistitem) => (
          <WishList key={wishlistitem.id} wishlist={wishlistitem} />
        ))}
      </div>
    </ContainerWrapper>
  );
};
