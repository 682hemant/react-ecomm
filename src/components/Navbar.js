import { findByLabelText } from '@testing-library/react'
import React from 'react';
import { connect } from 'react-redux';

const Navbar = ({counter}) => {
  const styled = {
    right: 0.625+"rem",
    top: 0.438+"rem" 
  }
  const counterStyled = {
    width: 1+"rem",
    height: 1+"rem",
    borderRadius: 50+"%",
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems :  "canter",
    top: 1+"rem",
    right: 1+"rem"
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">E-Cart</a>
          <form className="d-flex position-relative">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button style={styled} className="border-0 bg-white position-absolute" type="submit"><i class="las la-search"></i></button>
          </form>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">hem</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i class="las la-heart"></i></a>
              </li>
              <li className="nav-item position-relative">
                <a className="nav-link" href="#"><i class="las la-shopping-cart"></i></a>
                <div className="position-absolute" style={counterStyled}>{counter}</div>
              </li>
              <li className="nav-item dropdown">
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
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
