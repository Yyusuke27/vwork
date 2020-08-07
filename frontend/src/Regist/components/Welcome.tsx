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

import "../pages/Regist.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    span: {
      fontSize: 50,
      color: Color.VWORK_RED,
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
  })
);

const Welcome = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
        <DialogTitle id="alert-dialog-slide-title">
          <Typography>
            <span className={classes.span}>VWORK</span>
            へようこそ
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography>
              これからVWORKを活用するための設定をして頂きます。
            </Typography>
            <Typography>
              「NEXT」を押して次のステップへ進んで下さい。
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/regist/step_board" style={{ textDecoration: "none" }}>
            <Button className={classes.button}>NEXT</Button>
          </Link>
        </DialogActions>
      </Container>
    </div>
  );
};

export default Welcome;
