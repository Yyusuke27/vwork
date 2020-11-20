import React from "react";
import { Switch, Route } from "react-router-dom";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";
import StepFinish from "../components/StepFinish";

const RegisterStep = () => {
  return (
    <>
      <Switch>
        <Route path="/register/step/1" exact>
          <StepOne />
        </Route>
        <Route path="/register/step/2" exact>
          <StepTwo />
        </Route>
        <Route path="/register/step/3" exact>
          <StepThree />
        </Route>
        <Route path="/register/step/4" exact>
          <StepFour />
        </Route>
        <Route path="/register/step/5" exact>
          <StepFinish />
        </Route>
      </Switch>
    </>
  );
};

export default RegisterStep;
