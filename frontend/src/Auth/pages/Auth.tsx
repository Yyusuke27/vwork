import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import SignUp from "./SignUp";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { fetchAsyncCurrentUser } from "../authSlice";
import { toggleLoading } from "../../appSlice";

const Auth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleLoading(true));
    dispatch(fetchAsyncCurrentUser());
    dispatch(toggleLoading(false));
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route exact path="/auth/signup">
          <SignUp />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default Auth;
