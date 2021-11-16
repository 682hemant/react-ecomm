import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import CounterStyled from "../assets/styles/CounterStyled.style";
import { searchProduct } from "../redux/products/actions/index";
import ListItems from "./shared/LIstItems";
import Dropdown from "../assets/styles/Dropdown";
import { logOut, getUserName } from '../redux/auth/actions'
import { wishListItems } from "../redux/wishlist";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showDropDown, setDropdown] = useState(false);
  const [inputField, setInputField] = useState("");
  const history = useHistory();
  const counter = useSelector((state) => state.prodReducer.counter);
  let userName = useSelector((state) => state.authReducer.user.username);
  const wishlistitem = useSelector(state => state.wishListReducer.wishlist)
  const dispatch = useDispatch();
  
  let userNam = userName || "NA"
  const slicedName = userNam.trim().slice(0, 2).toUpperCase();

  useEffect(() => {
    setTimeout(() => {
      dispatch(searchProduct(inputField));
    }, 500);
  }, [inputField]);

  useEffect(() => {
   dispatch(wishListItems())
  }, [])

  useEffect(() => {
    dispatch(getUserName())
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    return
  }
 
  const togglerChangeHandler = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (window.innerWidth > 700) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [window.innerWidth]);

  const logOutHandler = () => {
    dispatch(logOut())
    history.push('/login');
    setDropdown(false);
  }

  return (
    <NavBar className="navbar navbar-expand-lg navbar-light position-fixed w-100 px-md-3 px-0">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          E-Cart
        </Link>
        {history.location.pathname === "/" && <form className="d-flex position-relative" onSubmit={submitHandler}>
          <input
            className="form-control"
            value={inputField}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setInputField(e.target.value);
            }}
          />
          <Button className="border-0 bg-white position-absolute" type="submit">
            <i className="las la-search"></i>
          </Button>
        </form>}
        <button
          className="navbar-toggler"
          onClick={togglerChangeHandler}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {show && (
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
              <ListItems classNames="nav-item position-relative">
                <div
                  className="nav-link active text-white d-flex align-items-center"
                  aria-current="page"
                >
                  <AvatarContainer
                    className="curser-pointer"
                    onClick={() => setDropdown(!showDropDown)}
                  >
                    {slicedName || `NA`}
                  </AvatarContainer>
                  <i className="las la-angle-down ms-1"></i>
                </div>
                {showDropDown && (
                  <Dropdown className="position-absolute">
                    <ListItems>
                      <Link
                        className="text-decoration-none d-flex align-items-center text-black p-2 curser-pointer"
                        to="/analytics"
                        onClick={() => setDropdown(false)}
                      >
                        <i className="las la-chart-bar pe-2"></i> Analytics
                      </Link>
                    </ListItems>
                      <ListItems>
                      <button className="bg-white border-0 p-2"
                        onClick={logOutHandler}
                      >
                        <i className="las la-sign-out-alt pe-2" ></i> Log out
                        </button>
                      </ListItems>
                  </Dropdown>
                )}
              </ListItems>
              <ListItems classNames="nav-item position-relative">
                <Link className="nav-link text-white" to="/wishlist">
                  <i className="las la-heart text-primary la-2x"></i>
                  <CounterStyled>{wishlistitem.length}</CounterStyled>
                </Link>
              </ListItems>
              <li className="nav-item position-relative">
                <Link className="nav-link text-primary" to="/cart">
                  <i className="las la-shopping-cart la-2x"></i>
                </Link>
                <CounterStyled>{counter}</CounterStyled>
              </li>
            </ul>
          </div>
        )}
      </div>
    </NavBar>
  );
};

export default Navbar;

// styled componenets
const Button = styled.button`
  right: 0.625rem;
  top: 0.438rem;
`;

const NavBar = styled.div`
  background-color: rgb(75, 40, 109);
  z-index: 10;
  color: #fff;
`;

const AvatarContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #f2eff4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4b286d;
`;
