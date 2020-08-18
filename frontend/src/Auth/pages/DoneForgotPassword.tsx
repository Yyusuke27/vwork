import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Color from "../../shared/util/color";
import FormArea from "../components/FormArea";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  formArea: {
    backgroundColor: Color.VWORK_BLACK,
    paddingTop: theme.spacing(8),
  },
  image: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/auth/send_mail.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundColor: Color.VWORK_WHITE,
    backgroundSize: "60%",
    backgroundPosition: "center",
  },
  paper: {
    height: "70vh",
    padding: theme.spacing(10, 4),
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    backgroundColor: Color.VWORK_WHITE,
    borderRadius: 20,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logoIcon: {
    display: "inline-block",
    height: 32,
    width: 32,
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo192.png)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginRight: theme.spacing(1),
  },
}));

const DoneForgotPassword = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        container
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        direction="column"
        alignItems="center"
        square
        className={classes.formArea}
      >
        <FormArea buttonPath="/auth/login" buttonText="ログイン">
          <Typography component="h1" variant="h5">
            パスワード再設定の申請を受け付けました。
          </Typography>
          <Box my={5}>
            <Typography variant="body1">
              入力いただいたメールアドレス宛に
              <span className="vwork-red">パスワード再設定用のURL</span>
              を送信しました。
            </Typography>
          </Box>
        </FormArea>
      </Grid>
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
    </Grid>
  );
};

export default DoneForgotPassword;
