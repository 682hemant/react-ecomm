import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const Accordians = ({ onChangeValue }) => {
  const labels = ["100-500", "501-1000", "1001-10000"];
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
          <div onChange={onChangeValue}>
            {labels.map((value, idx) => {
              return (
                <div className="mt-2" key={idx}>
                  <input type="radio" value={value} name="price" />
                  <label className="ms-2">{value}</label>
                </div>
              );
            })}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
