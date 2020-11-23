import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InviteeWelcome from '../components/InviteeWelcome';
import InviteeStepOne from '../components/InviteeStepOne';
import InviteeStepTwo from '../components/InviteeStepTwo';
import InviteeStepThree from '../components/InviteeStepThree';

const RegisterInvitee = () => (
  <>
    <Switch>
      <Route path="/register/invitee/auth" exact>
        <InviteeAuth />
      </Route>
      <Route path="/register/invitee/welcome" exact>
        <InviteeWelcome />
      </Route>
      <Route path="/register/invitee/step1" exact>
        <InviteeStepOne />
      </Route>
      <Route path="/register/invitee/step2" exact>
        <InviteeStepTwo />
      </Route>
      <Route path="/register/invitee/step3" exact>
        <InviteeStepThree />
      </Route>
    </Switch>
  </>
);

export default RegisterInvitee;
