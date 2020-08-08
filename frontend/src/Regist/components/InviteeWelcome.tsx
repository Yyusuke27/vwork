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
import { Box } from "@material-ui/core";

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
    dialog: {
      position: "relative",
    },
  })
);

const InviteeWelcome = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
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
              <Typography variant="h5">
                これからVWORKを活用するための設定をして頂きます。
              </Typography>
              <Typography variant="h5">
                「NEXT」を押して次のステップへ進んで下さい。
              </Typography>
            </DialogContentText>
          </Box>
        </DialogContent>
        <DialogActions>
          <Link
            to="/regist_invitee/step_one"
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

export default InviteeWelcome;
