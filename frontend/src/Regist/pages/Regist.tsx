import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";
import StepBoard from "../components/StepBoard";

const Regist = () => {
  return (
    <>
      <Switch>
        <Route exact path="/regist/welcome">
          <Welcome />
        </Route>
        <Route exact path="/regist/step_board">
          <StepBoard />
        </Route>
      </Switch>
    </>
  );
};

export default Regist;
