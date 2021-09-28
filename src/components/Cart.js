import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { increaseItemQuantity } from '../redux/actions/product';
import '../../src/App.css';

const Cart = ({ item, total, removeCartItem, dispatch }) => {

  const [selected, changeSelected] = useState(1);
  const { id, src, heading, text, rate } = item;
  // useEffect(() => {
  //   dispatch(increaseItemQuantity({id,selected}));
  // },[selected])

  return (
    <>
      <div className="col-lg-6 bg-white">
        <hr />
        <div className="d-flex mt-4 w-100">
          <img src={src} alt="cart item" style={{ width: 12.5 + "rem" }} />
          <div className="d-flex flex-column ms-5 w-100">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h6 className="mb-0">{heading}</h6>
              <select class="form-select w-0" value={selected} aria-label="Default select example" onChange={e => changeSelected(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button className="bg-white text-primary border-0" onClick={() => removeCartItem(id)}>Delete</button>
            </div>
            <p>{text}</p>
            <span>Price:{rate}</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 bg-white" style={{ marginLeft: "6.25rem" }}>
        <table class="table">
          <tbody>
            <tr>
              <td>{heading}</td>
              <td>{rate}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default connect()(Cart)
