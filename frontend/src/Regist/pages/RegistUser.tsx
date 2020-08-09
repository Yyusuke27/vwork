import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";
import StepBoard from "../components/StepBoard";
import "./RegistUser.css";

const RegistUser = () => {
  return (
    <>
      <Switch>
        <Route path="gis">
          <Welcome />
        </Route>
        <Route path="/regist/regist_user/step_board">
          <StepBoard />
        </Route>
      </Switch>
    </>
  );
};

export default RegistUser;
