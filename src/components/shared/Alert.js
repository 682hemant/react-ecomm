import React from "react";
import { Alert } from "react-bootstrap";
import "../../../src/App.css";

const AlertIndicator = ({ messege, setShow }) => {
  return (
    <Alert className="alert" variant="success" onClose={setShow} dismissible>
      {messege}
    </Alert>
  );
};
export default AlertIndicator;
