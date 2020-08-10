import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBarOfRegistration from "../../shared/components/Navigation/SideBarOfRegistration";
import Dialog from "@material-ui/core/Dialog";
import Container from "@material-ui/core/Container";
import RegistUser from "./RegistUser";
import RegistInvitee from "./RegistInvitee";

import "./Regist.css";
import { useDispatch } from "react-redux";
import { fetchAsyncCurrentUser } from "../../Auth/authSlice";

const Regist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCurrentUser);
  }, [dispatch]);

  return (
    <>
      <SideBarOfRegistration />
      <Dialog open keepMounted maxWidth="xl" className="registDialog">
        <Container maxWidth="md">
          <Router>
            <Switch>
              <Route path="/regist/invitee">
                <RegistInvitee />
              </Route>
              <Route path="/regist">
                <RegistUser />
              </Route>
            </Switch>
          </Router>
        </Container>
      </Dialog>
    </>
  );
};

export default Regist;
