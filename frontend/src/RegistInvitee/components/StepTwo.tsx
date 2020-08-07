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
import Typography from "@material-ui/core/Typography";

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
  })
);

const StepTwo = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
        <DialogTitle id="alert-dialog-slide-title">
          <Typography style={{ fontSize: 40, color: Color.VWORK_BLACK }}>
            プロフィール設定
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link
            to="/regist_invitee/step_three"
            style={{ textDecoration: "none" }}
          >
            <Button className={classes.button}>NEXT</Button>
          </Link>
        </DialogActions>
      </Container>
    </div>
  );
};

export default StepTwo;
