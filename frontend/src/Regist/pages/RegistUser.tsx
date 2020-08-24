import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";
import RegistStep from "./RegistStep";
import { fetchAsyncCurrentUser } from "../../Auth/authSlice";

const RegistUser = () => {
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
        <Route path="/regist/welcome">
          <Welcome />
        </Route>
        <Route path="/regist/step">
          <RegistStep />
        </Route>
      </Switch>
    </>
  );
};

export default RegistUser;
