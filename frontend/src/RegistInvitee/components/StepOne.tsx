import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../shared/util/color";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "../pages/RegistInvitee.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 100,
    },
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
    style: {
      marginTop: "40%",
      marginRight: "10%",
    },
  })
);

const StepOne = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
        <DialogTitle id="alert-dialog-slide-title">
          <h1 style={{ fontSize: 40, color: Color.VWORK_BLACK }}>基本設定</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link
            to="/regist_invitee/step_two"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
            >
              NEXT
            </Button>
          </Link>
        </DialogActions>
      </Container>
    </div>
  );
};

export default StepOne;
