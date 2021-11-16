import React from "react";
import styled from "styled-components";

import { authSharedConst } from "../../../constants/auth";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <AuthFooter className="d-flex justify-content-center align-item-center">
      <div className="d-flex flex-column">
        <p className="mb-0">{authSharedConst.logoName}</p>
        <small>
          @{currentYear} {authSharedConst.logoName}
        </small>
      </div>
    </AuthFooter>
  );
};

export default Footer;

const AuthFooter = styled.footer`
  background-color: #4b286d;
  width: 100%;
  bottom: 0;
  padding: 0.5rem 0 0 0;
  position: fixed;
  color: white;
`;
