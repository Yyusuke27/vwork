import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";
import StepBoard from "../components/StepBoard";
import Dialog from "@material-ui/core/Dialog";
import SideBarOfRegistration from "../../shared/components/Navigation/SideBarOfRegistration";

import "./Regist.css";

const Regist = () => {
  return (
    <>
      <SideBarOfRegistration />
      <Dialog open keepMounted maxWidth="xl" className="registDialog">
        <Switch>
          <Route exact path="/regist/welcome">
            <Welcome />
          </Route>
          <Route exact path="/regist/step_board">
            <StepBoard />
          </Route>
        </Switch>
      </Dialog>
    </>
  );
};

export default Regist;
