import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";
import RegisterStep from "./RegisterStep";
import { fetchAsyncCurrentUser } from "../../Auth/authSlice";

const RegisterUser = () => {
  const dispatch = useDispatch();

  const fetchUser = useCallback(async () => {
    await dispatch(fetchAsyncCurrentUser());
  }, [dispatch]);

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
    } else {
      fetchUser();
      mounted.current = true;
    }
  }, [fetchUser]);

  return (
    <>
      <Switch>
        <Route path="/register/welcome">
          <Welcome />
        </Route>
        <Route path="/register/step">
          <RegisterStep />
        </Route>
      </Switch>
    </>
  );
};

export default RegisterUser;
