import React from "react";
import Color from "../../shared/util/color";
import FormArea from "../components/FormArea";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
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
