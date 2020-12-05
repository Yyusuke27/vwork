import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Color from "../../shared/util/color";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { toggleLoading } from "../../appSlice";
import { fetchAsyncInvitation, selectInviteAuth } from "../registerSlice";
import InviteeSignIn from "./InviteeSignIn";
import InviteeSignUp from "./InviteeSignUp";

const InviteeAuth = () => {
  const dispatch = useDispatch();

  const inviteeAuth = useSelector(selectInviteAuth);

  const getInvitation = useCallback(
    async (query) => {
      await dispatch(fetchAsyncInvitation(query));
    },
    [dispatch]
  );

  // TODO: emailはapiで取得
  // PW、確認用PWだけ入力させる。
  // registrationがtrueだったら参加する(ログイン)ボタンのみ
  useEffect(() => {
    localStorage.clear();
    const query = window.location.search.slice(1);
    localStorage.setItem("Itoken", query);
    dispatch(toggleLoading(true));
    getInvitation(query);
    dispatch(toggleLoading(false));
  }, [dispatch, getInvitation]);

  return (
    <>
      <DialogTitle id="alert-dialog-slide-title">
        <Box mt={5}>
          <Typography variant="h2">
            <span style={{ color: Color.VWORK_RED }}>VWORK</span>
            へようこそ。<br/>
          </Typography>
          <Typography variant="h5">
            {inviteeAuth.workspaceName}に招待されました。
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        {inviteeAuth.isRegistered ? <InviteeSignIn email={inviteeAuth.email} /> : <InviteeSignUp email={inviteeAuth.email} />}
      </DialogContent>
    </>
  );
};

export default InviteeAuth;
