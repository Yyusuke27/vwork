import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../shared/util/color";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "../pages/RegistInvitee.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      position: "absolute",
      top: "35%",
      left: "20%",
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

const StepThree = () => {
  const classes = useStyles();

  return (
    <div>
      <Dialog open keepMounted maxWidth="xl" className={classes.dialog}>
        <Container maxWidth="md">
          <DialogTitle id="alert-dialog-slide-title">
            <h1 className={classes.title}>
              <span style={{ fontSize: 50, color: Color.VWORK_RED }}>
                VWORK
              </span>
              の設定は完了しました。
            </h1>
          </DialogTitle>
          <DialogActions>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button className={classes.button}>NEXT</Button>
            </Link>
          </DialogActions>
        </Container>
      </Dialog>
    </div>
  );
};

export default StepThree;
