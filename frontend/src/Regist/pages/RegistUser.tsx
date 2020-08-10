import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";
import RegistStep from "./RegistStep";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../../appSlice";
import { fetchAsyncCurrentUser } from "../../Auth/authSlice";

const RegistUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleLoading(true));
    dispatch(fetchAsyncCurrentUser());
    dispatch(toggleLoading(false));
  }, [dispatch]);
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
