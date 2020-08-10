import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBarOfRegistration from "../../shared/components/Navigation/SideBarOfRegistration";
import Dialog from "@material-ui/core/Dialog";
import Container from "@material-ui/core/Container";
import RegistUser from "./RegistUser";
import RegistInvitee from "./RegistInvitee";

import "./Regist.css";

const Regist = () => {
  return (
    <>
      <SideBarOfRegistration />
      <Dialog open keepMounted maxWidth="xl" className="registDialog">
        <Container maxWidth="md">
          <Router>
            <Switch>
              <Route path="/regist">
                <RegistUser />
              </Route>
              <Route path="/regist/invitee">
                <RegistInvitee />
              </Route>
            </Switch>
          </Router>
        </Container>
      </Dialog>
    </>
  );
};

export default Regist;
