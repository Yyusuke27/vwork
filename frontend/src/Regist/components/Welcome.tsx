import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../shared/util/color";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    span: {
      color: Color.VWORK_RED,
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
  })
);

const Welcome = () => {
  const classes = useStyles();

  return (
    <>
      <DialogTitle id="alert-dialog-slide-title">
        <Box mt={5}>
          <Typography variant="h2" component="h2">
            <span className={classes.span}>VWORK</span>
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
        <Link to="/regist/step/1">
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

export default Welcome;
