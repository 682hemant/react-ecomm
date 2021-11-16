import * as actionTypes from "./constants";
import authApi from "../../api/authapi";
import _ from "lodash";

export const signUp = (data) => async (dispatch) => {
  await authApi.post("/auth", { ...data, isAunthenticate: false });
  dispatch({ type: actionTypes.SIGN_UP });
};

export const logIn = (data) => async (dispatch) => {
  const response = await authApi.get(`/auth`);
  const logInUser = response.data.find(
    (user) => user.email === data.email && user.passwords === data.passwords
  );

  if (_.isEmpty(logInUser)) {
    return;
  } else {
    await authApi.put(`/auth/${logInUser.id}`, {
      ...logInUser,
      isAunthenticate: true,
    });
    const updateUsers = await authApi.get(`/auth`);
    return dispatch({ type: actionTypes.LOG_IN, payload: updateUsers.data });
  }
};

export const logOut = () => async (dispatch) => {
  const response = await authApi.get(`/auth`);
  const user = await response.data.find(
    (user) => user.isAunthenticate === true
  );
  const findedUser = await authApi.put(`/auth/${user.id}`, {
    ...user,
    isAunthenticate: false,
  });
  return dispatch({ type: "LOG_OUT", payload: findedUser.data });
};

export const getUserName = () => async (dispatch) => {
  const response = await authApi.get(`/auth`);
  const user = await response.data.find(
    (user) => user.isAunthenticate === true
  );
  dispatch({ type: actionTypes.GET_USER_NAME, payload: user });
};
