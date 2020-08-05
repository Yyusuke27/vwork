import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";

const Regist = () => {
  return (
    <>
      <Switch>
        <Route exact path="/welcome">
          <Welcome />
        </Route>
      </Switch>
    </>
  );
};

export default Regist;
