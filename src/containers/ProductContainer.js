import React, { useEffect,useState } from "react";
import { connect } from "react-redux";

import { getProducts } from "../redux/actions/product";
import Product from "../components/Product";
import Spinners from "../components/shared/Spinner";

const ProductContainer = ({ products, dispatch, isLoading, isAdded }) => {
  // const [show, setShow] = useState(true);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
    
  // if (isAdded) {
  //   var alert = (
  //     <Toast className="position-absolute"   onClose={() => setShow(false)} show={show} delay={3000} autohide>
  //       <Toast.Header></Toast.Header>
  //       <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
  //     </Toast>
  //   );
  // }

  if (isLoading) {
    var loading = <Spinners />
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        {loading}
      </div>
      {/* {alert} */}
      <div className="row mx-0">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isAdded: state.isAdded,
    products: state.data,
    isLoading: state.saving,
  };
};

export default connect(mapStateToProps)(ProductContainer);
