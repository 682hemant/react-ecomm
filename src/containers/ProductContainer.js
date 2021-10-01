import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getProducts,getCartItems } from "../redux/actions/index";
import Product from "../components/Product";
import Spinners from "../components/shared/Spinner";


const ProductContainer = ({ products, dispatch, isLoading, isAdded }) => {
  // const [show, setShow] = useState(true);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCartItems())
  }, []);
    
  // if (isAdded) {
  //   var alert = (
  //     <Toast className="position-absolute" onClose={() => setShow(false)} show={show} delay={3000} autohide>
  //       <Toast.Header></Toast.Header>
  //       <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
  //     </Toast>
  //   );
  // }

  if (isLoading) {
    var loading = <Spinners />
  }
  if (products.length === 0){
    var messege = <h6>Sorry no item matches to your search</h6>
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        {loading}
      </div>
      {messege}
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
    // products: state.data,
    isLoading: state.saving,
  };
};

export default connect(mapStateToProps)(ProductContainer);
