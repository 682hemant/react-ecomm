import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';

import { deleteCartItem, increaseItemQuantity} from '../redux/actions/product';

const ItemDetail = ({ item, dispatch }) => {
	const { id, src, heading, text, rate } = item;

	const [selected, changeSelected] = useState(1);
	const [options] = useState([1, 2, 3, 4, 5])

	// const { id, src, heading, text, rate } = item;
	useEffect(() => {
	  dispatch(increaseItemQuantity({id,selected}));
	},[selected])

	const removeCartItemHandler = (id) => {
		dispatch(deleteCartItem(id))
	}
	return (
		<>
			<div key={id} className="d-flex flex-md-row flex-column mt-4 w-100">
				<img src={src} alt="cart item" style={{ width: "12.5rem" }} />
				<div className="d-flex flex-column ms-md-5 ms-0 w-100">
					<div className="d-flex justify-content-between align-items-center w-100">
						<h6 className="mb-0">{heading}</h6>
						<select className="form-select w-0" value={selected} aria-label="Default select example" onChange={e => changeSelected(e.target.value)}>
							{options.map(option => <option key={option} value={option}>{option}</option>)}
						</select>
						<button className="bg-white text-primary border-0" onClick={() => removeCartItemHandler(item.id)}>Delete</button>
					</div>
					<p>{text}</p>
					<span>Price:{rate}</span>
				</div>
			</div>
			<hr />
		</>
	)
}

export default connect()(ItemDetail);




