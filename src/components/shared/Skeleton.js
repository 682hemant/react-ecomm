import React, { useState } from "react";
import { Placeholder, Card } from "react-bootstrap";

export const Skeleton = () => {
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <>
      {skeleton.map((card, idx) => (
        <div key={idx} className="col-lg-3 col-md-6 col-12 mt-4">
          <Card>
            <Placeholder className="px-5" style={{ height: "12rem" }}/>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={7} />
                <Placeholder xs={5} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={5} />
                <Placeholder xs={8} />
              </Placeholder>
              <div className="d-flex justify-content-between">
                <Placeholder xs={12} />
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};
