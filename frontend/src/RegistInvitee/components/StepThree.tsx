import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
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

const StepThree = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
        <DialogTitle id="alert-dialog-slide-title">
          <Box mt={25} ml={10}>
            <Typography variant="h3" className={classes.title}>
              <span style={{ color: Color.VWORK_RED }}>VWORK</span>
              の設定は完了しました。
            </Typography>
          </Box>
        </DialogTitle>
        <DialogActions>
          <Link to="/" style={{ textDecoration: "none" }}>
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

export default StepThree;
