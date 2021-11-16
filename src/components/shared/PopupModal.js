import React from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

import { popUpConst } from "../../constants/popup";

export const PopupModal = ({ show, handleClose, deleteHandler }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>{popUpConst.popMessege}</Modal.Body>
      <Modal.Footer>
        <ButtonContainer>
          <Button className="close-btn" onClick={handleClose}>
            Close
          </Button>
          <Button className="delete-btn ms-3" onClick={deleteHandler}>
            Delete
          </Button>
        </ButtonContainer>
      </Modal.Footer>
    </Modal>
  );
};

const ButtonContainer = styled.div`
  .close-btn {
   border: 0;
   color: #ffffff;
   background-color:#248700;;
   border-radius: 0.25rem;
  }
  .delete-btn {
    border: 0;
   color: #fff;
   background-color: rgb(75,40,109);
   border-radius: 0.25rem;
 }
`
