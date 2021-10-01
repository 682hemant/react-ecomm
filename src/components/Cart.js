import React,{useState} from 'react';
import { connect, useSelector } from 'react-redux';
import '../../src/App.css';
import styled from 'styled-components';
import { Button, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import CartPriceDetail from './CartPriceDetail';
import ItemDetail from './ItemDetail';
import Spinners from './shared/Spinner';

const Cart = ({ items, total, counter }) => {
  const isSaving = useSelector((state) => state.saving)
  
  if (isSaving) {
    var spinner = <Spinners />
  }
  return (
    <>
      {spinner}
      <div className="col-lg-6 col-12 bg-white p-4 rounded">
        <h4>My cart ({counter})</h4>
        {items.map(item => <ItemDetail item={item} />
        )}
      { items.length >=1 && <Stack direction="horizontal" gap={3}>
          <Button variant="warning ms-auto"><Link to="/viewcart" className="text-decoration-none text-black">Place order </Link></Button>
        </Stack> }
      </div>
      <PriceDetail className="col-lg-4 col-12 bg-white p-4 rounded mt-md-0 mt-4">
        <h4>Price detail</h4>
        <table class="table">
          {items.map(item => <tbody key={item.id}>
            <CartPriceDetail item={item} />
          </tbody>)}
        </table>
        <CartTotal>Cart total is {total}</CartTotal>
      </PriceDetail>
    </>
  )
}

export default connect()(Cart)

const PriceDetail = styled.div`
    margin-left: 6.25rem;
    @media (max-width: 768px) {
    margin-left: 0;
  }
`
const CartTotal = styled.h6`
  @media (max-width: 768px) {
      margin-left: 0;
    }
`