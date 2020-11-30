import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import SignUp from "./SignUp";
import Login from "./Login";
import {
  fetchAsyncCurrentUser,
  selectErrorMessage,
  setErrorOpen,
  selectErrorOpen,
} from "../authSlice";
import { toggleLoading } from "../../appSlice";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import DoneForgotPassword from "./DoneForgotPassword";

const Auth = () => {
  const dispatch = useDispatch();

  const vworkInfoInlocalStorage = localStorage.vwork;

  useEffect(() => {
    if (vworkInfoInlocalStorage) {
      dispatch(toggleLoading(true));
      dispatch(fetchAsyncCurrentUser(""));
      dispatch(toggleLoading(false));
    }
  }, [dispatch, vworkInfoInlocalStorage]);

  const errorMessage = useSelector(selectErrorMessage);
  const errorOpen = useSelector(selectErrorOpen);

  const handleClose = () => {
    dispatch(setErrorOpen(false));
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={errorOpen}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
      <Switch>
        <Route exact path="/auth/signup">
          <SignUp />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/auth/forgot/complete">
          <DoneForgotPassword />
        </Route>
        <Route exact path="/auth/forgot">
          <ForgotPassword />
        </Route>
        <Route exact path="/auth/reset">
          <ResetPassword />
        </Route>
      </Switch>
    </div>
  );
};

export default Auth;
