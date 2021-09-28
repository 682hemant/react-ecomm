import { findByLabelText } from '@testing-library/react'
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import CounterStyled from '../assets/styles/CounterStyled.style'
import { searchProduct } from '../redux/actions/product';

const Navbar = ({ counter, dispatch }) => {
  const [show, setShow] = useState(false);
  const [inputField, setInputField] = useState("");


  const styled = {
    right: 0.625 + "rem",
    top: 0.438 + "rem"
  }
  const searchHandler = e => {
    console.log(inputField);
    e.preventDefault()
    dispatch(searchProduct(inputField));
  }
  useEffect(() => {
    console.log(inputField);
    dispatch(searchProduct(inputField));
  }, [inputField])
  const togglerChangeHandler = () => {
    setShow(!show)
  }
  useEffect(() => {
    if (window.innerWidth > 700) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [window.innerWidth])

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100" style={{ zIndex: 10 }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">E-Cart</Link>
          <form className="d-flex position-relative" onSubmit={searchHandler}>
            <input className="form-control me-2" value={inputField} type="search" placeholder="Search" aria-label="Search" onChange={e => setInputField(e.target.value)} />
            <button style={styled} className="border-0 bg-white position-absolute" type="submit"><i class="las la-search"></i></button>
          </form>
          <button className="navbar-toggler" onClick={togglerChangeHandler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {show && <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">hem</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i class="las la-heart"></i></a>
              </li>
              <li className="nav-item position-relative">
                <Link className="nav-link" to="/cart"><i className="las la-shopping-cart"></i></Link>
                <CounterStyled>{counter}</CounterStyled>
              </li>
              <li className="nav-item dropdown">
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>}
        </div>
      </nav>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Navbar)
