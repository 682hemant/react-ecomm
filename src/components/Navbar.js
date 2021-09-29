import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import CounterStyled from '../assets/styles/CounterStyled.style'
import { searchProduct } from '../redux/actions/product';
import ListItems from './shared/LIstItems';


const Navbar = ({ counter, dispatch }) => {
  const [show, setShow] = useState(false);
  const [inputField, setInputField] = useState("");

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
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100" style={{ zIndex: 10 }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">E-Cart</Link>
        <form className="d-flex position-relative" onSubmit={searchHandler}>
          <input className="form-control me-2" value={inputField} type="search" placeholder="Search" aria-label="Search" onChange={e => setInputField(e.target.value)} />
          <Button className="border-0 bg-white position-absolute" type="submit"><i class="las la-search"></i></Button>
        </form>
        <button className="navbar-toggler" onClick={togglerChangeHandler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {show && <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <ListItems classNames="nav-item">
              <Link className="nav-link active" aria-current="page">hem</Link>
            </ListItems>
            <ListItems classNames="nav-item">
              <Link className="nav-link"><i className="las la-heart"></i></Link>
            </ListItems>
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart"><i className="las la-shopping-cart"></i></Link>
              <CounterStyled>{counter}</CounterStyled>
            </li>
          </ul>
        </div>}
      </div>
    </nav>
  )
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Navbar)

// styled componenets 
const Button = styled.button`
  right: 0.625rem;
  top:  0.438rem
`
