import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { signUp } from "../../redux/auth/actions";
import AlertIndicator from "../shared/Alert";
import { FormContainer } from "../../assets/styles/FormContainer";
import Navbar from "./shared/NavBar";
import Footer from "./shared/Footer";
import { Button } from "../shared/Button";
import { authConst } from "../../constants/auth";

export const SignUp = () => {
  const [singnUpFields, setSignUpFields] = useState({
    username: "",
    email: "",
    passwords: "",
  });
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setPassWordError] = useState("");
  const [isRegistred, setIsRegistred] = useState(false);

  const dispatch = useDispatch();

  const fieldChangeHandler = (e) => {
    e.preventDefault();
    setSignUpFields({ ...singnUpFields, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (singnUpFields.username.length < 4) {
      setUserNameError("Username is too sort");
      return;
    }
    if (singnUpFields.email.length === 0) {
      setemailError("email cant be blanked");
      return;
    }
    if (singnUpFields.passwords.length < 6) {
      setPassWordError("password should be greater than 6");
      return;
    }
    dispatch(signUp(singnUpFields));
    setIsRegistred(true);
    setSignUpFields({ username: "", email: "", passwords: "" });
    setemailError("");
    setPassWordError("")

  };
  const setShow = () => {
    setIsRegistred(false);
  };

  return (
    <>
      <Navbar />
      {isRegistred && (
        <AlertIndicator
          messege="user registred successfully"
          setShow={setShow}
        />
      )}
      <FormContainer className="d-flex justify-content-center align-item-center">
        <form className="d-flex flex-column mt-2" onSubmit={submitHandler}>
          <h6>{authConst.signUpFormHeading}</h6>
          <label>{authConst.inputLabelUserName}</label>
          <input
            className="form-control"
            type="text"
            name="username"
            onChange={fieldChangeHandler}
            value={singnUpFields.username}
          />
          <span className="text-danger" id="error">
            {userNameError}
          </span>
          <label className="mt-3">{authConst.inputLabelEmail}</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={fieldChangeHandler}
            value={singnUpFields.email}
          />
          <span className="text-danger" id="emailError">
            {emailError}
          </span>
          <label className="mt-3">{authConst.inputLabelPassword}</label>
          <input
            className="form-control"
            type="password"
            name="passwords"
            onChange={fieldChangeHandler}
            value={singnUpFields.passwords}
          />
          <span className="text-danger" id="passwordError">
            {passwordError}
          </span>
          <Button classes="mt-3 py-2" label="Sign up" />
          <span className="mt-2">
            {authConst.registredLabel}<Link to="/login">Log in</Link>
          </span>
        </form>
      </FormContainer>
      <Footer />
    </>
  );
};
