import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
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
      backgroundColor: Color.VWORK_RED,
      color: Color.VWORK_WHITE,
      position: "absolute",
      fontSize: 30,

      width: 200,
      borderRadius: 15,
      right: "15%",
      top: "78%",
    },
    style: {
      marginTop: "40%",
      marginRight: "10%",
    },
    dialog: {
      position: "relative",
    },
  })
);

const StepTwo = () => {
  const classes = useStyles();

  return (
    <div>
      <Dialog open keepMounted maxWidth="xl" className={classes.dialog}>
        <Container maxWidth="md">
          <DialogTitle id="alert-dialog-slide-title">
            <h1 style={{ fontSize: 40, color: Color.VWORK_BLACK }}>
              プロフィール設定
            </h1>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="/regist/step_board" style={{ textDecoration: "none" }}>
              <Button className={classes.button}>NEXT</Button>
            </Link>
          </DialogActions>
        </Container>
      </Dialog>
    </div>
  );
};

export default StepTwo;
