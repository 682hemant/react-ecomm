import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { logIn } from "../../redux/auth/actions";
import { FormContainer } from "../../assets/styles/FormContainer";
import Navbar from "./shared/NavBar";
import Footer from "./shared/Footer";
import { Button } from "../shared/Button";
import { authConst } from "../../constants/auth";
// import AlertIndicator from "../shared/Alert";
// import Spinners from '../../components/shared/Spinner'

export const LogIn = () => {
  const [singnUpFields, setSignUpFields] = useState({
    email: "",
    passwords: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.authReducer.user);
  const isSaving = useSelector((state) => state.authReducer.saving);
  const [error, setError] = useState("");

  if (user.isAunthenticate) {
    history.push("/");
  } else {
    //  console.log(`please check your mail and password`);
  }
  const fieldChangeHandler = (e) => {
    e.preventDefault();
    setSignUpFields({ ...singnUpFields, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(logIn(singnUpFields));
    setSignUpFields({ email: "", passwords: "" });
    setTimeout(() => {
      if (!user.isAunthenticate) {
        setError(`Incorrect email and password`);
      }
    }, 3000);
  };

  setTimeout(() => {
    setError("");
  }, 5000);

  return (
    <>
      {/* {!isLoggedIn && <AlertIndicator messege="Please check your mail and password"/>} */}
      <Navbar />
      <span className="d-flex justify-content-center align-items-center text-danger">
        {error}
      </span>
      <FormContainer className="d-flex justify-content-center align-item-center">
        <form className="d-flex flex-column mt-3" onSubmit={submitHandler}>
          <h6>{authConst.formHeading}</h6>
          <label className="mt-3">{authConst.inputLabelEmail}</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={fieldChangeHandler}
            value={singnUpFields.email}
          />
          <label className="mt-3">{authConst.inputLabelPassword}</label>
          <input
            className="form-control"
            type="password"
            name="passwords"
            onChange={fieldChangeHandler}
            value={singnUpFields.passwords}
          />
          <Button classes="mt-3 py-2" label="Login" />
          <p className="mt-1">
            {authConst.registredLabel} <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </FormContainer>
      <Footer />
    </>
  );
};

export default LogIn;
