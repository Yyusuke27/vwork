import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Color from "../../shared/util/color";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { toggleLoading } from "../../appSlice";
import { fetchAsyncInvitation } from "../registerSlice";
import { workspacePathId } from "../../shared/util/workspacePathId"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      position: "absolute",
      fontSize: 30,
      width: 200,
      borderRadius: 15,
      right: "0%",
      bottom: "0%",
      marginBottom: 40,
      marginRight: 80,
    },
  })
);

const InviteeWelcome = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const getInvitation = useCallback(
    async (query) => {
      await dispatch(fetchAsyncInvitation(query));
    },
    [dispatch]
  );

  useEffect(() => {
    const query = window.location.search.slice(1);
    // localStorage.setItem("Itoken", query);
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
            へようこそ
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box mt={2}>
          <DialogContentText id="alert-dialog-slide-description">
            これからVWORKを活用するための設定をして頂きます。
            <br />
            「NEXT」を押して次のステップへ進んで下さい。
          </DialogContentText>
        </Box>
      </DialogContent>
      <DialogActions>
        <Link to={`/${workspacePathId}/register/invitee/step1`} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
          >
            NEXT
          </Button>
        </Link>
      </DialogActions>
    </>
  );
};

export default InviteeWelcome;
