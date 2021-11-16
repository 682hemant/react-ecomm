import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { authSharedConst } from "../../../constants/auth";

const NavBar = () => {
  return (
    <header>
      <Navbar className="ms-3" expand="lg" variant="light">
        <Navbar.Brand href="#">{authSharedConst.logoName}</Navbar.Brand>
      </Navbar>
    </header>
  );
};

export default NavBar;
