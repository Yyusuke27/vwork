import React from "react";

import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";
import StepFinish from "../components/StepFinish";
import { Switch, Route } from "react-router-dom";

const RegistStep = () => {
  return (
    <>
      <Switch>
        <Route path="/regist/step/1" exact>
          <StepOne />
        </Route>
        <Route path="/regist/step/2" exact>
          <StepTwo />
        </Route>
        <Route path="/regist/step/3" exact>
          <StepThree />
        </Route>
        <Route path="/regist/step/4" exact>
          <StepFour />
        </Route>
        <Route path="/regist/step/5" exact>
          <StepFinish />
        </Route>
      </Switch>
    </>
  );
};

export default RegistStep;
