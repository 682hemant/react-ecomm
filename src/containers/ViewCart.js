import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ContainerWrapper from "../assets/styles/ContainerWrapper";

const ViewCart = () => {
  alert("Your item is placed");
  return (
    // DUMMY COMPONENT  DUMMY COMPONENT DUMMY COMPONENT DUMMY COMPONENT DUMMY COMPONENT
    <ContainerWrapper>
      <Container>
        <Row>
          <Col className="bg-white p-4">
            <section>
              <h5>Cart total is (0)</h5>
              <hr />
              <h6>Please add item t0 the cart</h6>
            </section>
          </Col>
          <Col className="bg-white ms-md-5 ms-0 p-4">
            <section>
              <h5>Price Detail</h5>
              <hr />
              <h6>total amount (0)</h6>
            </section>
          </Col>
        </Row>
      </Container>
    </ContainerWrapper>
  );
};

export default ViewCart;
