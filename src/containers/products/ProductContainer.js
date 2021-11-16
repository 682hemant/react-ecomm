import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import makeAnimated from "react-select/animated";
import Select from "react-select";

// import { Accordians } from "../../components/Accordians";
import {
  getProducts,
  getCartItems,
  sortLowToHigh,
  priceRange,
  addTooCart,
  buyItems,
  filterByRange,
} from "../../redux/products/actions/index";
import Product from "../../components/products/Product";
import { Skeleton } from "../../components/shared/Skeleton";
// import Form from "react-bootstrap/Form";
import img from "../../assets/images/noproductfound.png";
import { wishList } from "../../redux/wishlist/index";
import AlertIndicator from "../../components/shared/Alert";
import Canvas from "../../components/shared/Canvas";
import { filtersByBrands, removeByBrand } from "../../redux/products/actions";

const ProductContainer = ({ products }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCheckbox, setSelectedCheckBox] = useState("");
  const [rangeChange, setRangeChange] = useState("");
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [itemBought, setItemBought] = useState(false);
  const [addedToWishList, setAddedToWishlist] = useState(false);
  const [show, setShow] = useState(false);

  const isAddedToWishList = useSelector(
    (state) => state.wishListReducer.prodWishList
  );
  const isLoading = useSelector((state) => state.prodReducer.saving);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(sortLowToHigh(selectedOption));
  }, [selectedOption]);

  useEffect(() => {
    dispatch(priceRange(selectedCheckbox));
  }, [selectedCheckbox]);

  useEffect(() => {
    setTimeout(() => {
      setIsItemAdded(false);
      setItemBought(false);
      setAddedToWishlist(false);
    }, 1000);
  });
  useEffect(() => {
    dispatch(filterByRange(rangeChange));
  }, [rangeChange]);

  // const onChangeValue = (e) => {
  //   setSelectedCheckBox(e.target.value);
  // };

  const addToCartHandler = (id) => {
    setIsItemAdded(true);
    dispatch(addTooCart(id));
  };
  const addToWishListHandler = (id) => {
    setAddedToWishlist(true);
    dispatch(wishList(id));
  };
  const buyHandler = (id) => {
    dispatch(buyItems(id));
    setItemBought(true);
  };
  const modalRemoveHandler = () => {
    setIsItemAdded(false);
    setItemBought(false);
    setAddedToWishlist(false);
  };
  const canavasCloseHandler = () => {
    setShow(false);
  };
  const rangeChangeHandler = (e) => {
    setRangeChange(e.target.value);
  };

  let sortLabels = ["sort by price: low to high", "sort by price: high to low"];

  var messege = (
    <div>
      <img src={img} alt="no result found" />
    </div>
  );
  const animatedComponents = makeAnimated();

  const colourOptions = [
    { value: "apple", label: "Apple" },
    { value: "xiomi", label: "Xiomi" },
  ];

  const onChange = (value, event) => {
    if (event.action === "select-option")
      dispatch(filtersByBrands(value[value.length - 1]));
    if (event.action === "remove-value")
      dispatch(removeByBrand(value[value.length - 1]));
  };

  return (
    <>
      {isItemAdded && (
        <AlertIndicator
          messege="Item added to the cart"
          setShow={modalRemoveHandler}
        />
      )}
      {itemBought && (
        <AlertIndicator messege="Item purchased" setShow={modalRemoveHandler} />
      )}
      {addedToWishList && (
        <AlertIndicator
          messege="Item added to wishlists"
          setShow={modalRemoveHandler}
        />
      )}
      <div className="d-flex justify-content-end align-items-center py-3">
        {/* <Accordians onChangeValue={onChangeValue} /> */}
        {/* <Form.Select
          className="mx-md-5 mx-3 align-self-start min-width-10"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="Sort items">Sort items</option>
          {sortLabels.map((sortLabel, idx) => (
            <option key={idx} value={sortLabel}>
              {sortLabel}
            </option>
          ))}
        </Form.Select> */}
        <div className="me-3">
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti={true}
            options={colourOptions}
            onChange={onChange}
          />
        </div>
        {/* <i
          onClick={() => setShow(true)}
          className="las la-filter la-2x align-self-start curser-pointer me-3"
        /> */}
        <Canvas
          show={show}
          handleClose={canavasCloseHandler}
          rangeChange={rangeChange}
          rangeChangeHandler={rangeChangeHandler}
          sortLabels={sortLabels}
        />
      </div>
      <div className="row mx-0">{isLoading && <Skeleton />}</div>
      <div className="d-flex justify-content-center align-items-center">
        {products.length === 0 && !isLoading && messege}
      </div>
      <div className="row mx-0">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            isAddedToWishList={isAddedToWishList}
            addToCartHandler={addToCartHandler}
            addToWishListHandler={addToWishListHandler}
            buyHandler={buyHandler}
          />
        ))}
      </div>
    </>
  );
};

export default ProductContainer;
