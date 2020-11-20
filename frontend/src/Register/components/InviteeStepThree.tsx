import React from "react";
import { useHistory } from "react-router-dom";
import Color from "../../shared/util/color";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      position: "absolute",
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

const InviteeStepThree = () => {
  const classes = useStyles();
  const history = useHistory();
  const pageChangeHandler = () => {
    history.push("/");
    history.go(0);
  };
  return (
    <div>
      <DialogTitle id="alert-dialog-slide-title">
        <Box mt={25} ml={10}>
          <Typography variant="h3" className={classes.title}>
            <span style={{ color: Color.VWORK_RED }}>VWORK</span>
            の設定は完了しました。
          </Typography>
        </Box>
      </DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          onClick={pageChangeHandler}
        >
          NEXT
        </Button>
      </DialogActions>
    </div>
  );
};

export default InviteeStepThree;
