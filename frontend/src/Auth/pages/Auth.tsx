import React from "react";
import { Route, Switch } from "react-router-dom";

import SignUp from "./SignUp";
import Login from "./Login";

const Auth = () => {
  // TODO: ログイン済だったら/workspaces or /にリダイレクト
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
