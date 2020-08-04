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

import "../pages/Regist.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 100,
    },
    button: {
      backgroundColor: Color.VWORK_RED,
      color: Color.VWORK_WHITE,
      fontSize: 30,
      marginRight: 80,
      marginBottom: 60,
      width: 200,
      borderRadius: 15,
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
      <Dialog open keepMounted maxWidth="xl">
        <DialogTitle id="alert-dialog-slide-title">
          <h1>
            <span style={{ fontSize: 50, color: Color.VWORK_RED }}>VWORK</span>
            へようこそ
          </h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p>これからVWORKを活用するための設定をして頂きます。</p>
            <p>NEXTを押して次へ進んで下さい。</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/auth/regist/step1" style={{ textDecoration: "none" }}>
            <Button className={classes.button}>NEXT</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StepOne;
