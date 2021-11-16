import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ReactImageMagnify from "react-image-magnify";
import { Container, Accordion } from "react-bootstrap";

import { getItemDetail } from "../../redux/products/actions/product";
import { prodcutsDetailsConsts } from "../../constants/prodcuts";
import "../../../src/App.css";

const ProductDetailsContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const itemDetails = useSelector((state) => state.prodReducer.itemDetail);

  useEffect(() => {
    dispatch(getItemDetail(id));
  }, []);

  const questions = [
    {
      questions: "Is this good",
      answer: "Contrary to popular belief, Lorem Ipsum ",
    },
    {
      questions: "It is a long established fact that a reader will be ",
      answer: "Contrary to popular belief, ",
    },
    {
      questions: "There are many variations of passages of",
      answer: "Contrary to popular belief, Lorem Ipsum ",
    },
  ];

  return (
    <Container fluid>
      <DetailsContainer className="d-flex flex-md-row flex-column">
        <div>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: itemDetails.src,
              },
              largeImage: {
                src: itemDetails.src,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>
        <div className="ms-md-4 ms-0 mt-md-0 mt-4">
          <h6>{itemDetails.heading}</h6>
          <Span>{prodcutsDetailsConsts.specialPrice}</Span>
          <p>{itemDetails.text}</p>
          <p>₹{itemDetails.rate}</p>
          <Span>{prodcutsDetailsConsts.coupanPriceForYou}</Span>
          <p>{prodcutsDetailsConsts.pecialExatraPrice}</p>
          <Span>{prodcutsDetailsConsts.availableOffers}</Span>
          {prodcutsDetailsConsts.offers.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
          <section className="my-5">
            <h4>Questions and Answers</h4>
            <Accordion defaultActiveKey="0">
              {questions.map((item, idx) => (
                <Accordion.Item
                  className="mt-3 border-top"
                  key={idx}
                  eventKey={idx}
                >
                  <Accordion.Header>{item.questions}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </section>
        </div>
      </DetailsContainer>
    </Container>
  );
};

export default ProductDetailsContainer;

const Span = styled.span`
  color: #26a541;
`;
const DetailsContainer = styled.div`
  padding-top: 6rem;
  img {
    border-radius: 0.25rem;
  }
`;
