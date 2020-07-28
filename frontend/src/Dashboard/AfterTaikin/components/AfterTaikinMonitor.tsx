import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textfield: {
    // height: 400,
  },
}));

const AfterTaikinMonitor = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography gutterBottom>勤務お疲れ様でした。</Typography>
        <Typography gutterBottom>
          今日行ったタスクの確認をしてください
        </Typography>

        <Typography>
          <Button variant="outlined" color="secondary">
            追加
          </Button>
        </Typography>
        <Typography>
          <form noValidate>
            <label htmlFor="hurikaeri">今日の振り返り</label>
            <br />
            <TextField
              id="hurikaeri"
              multiline
              rows={4}
              variant="outlined"
              style={{ height: 200, width: 800 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              退勤する
            </Button>
          </form>
        </Typography>
      </Container>
    </div>
  );
};

export default AfterTaikinMonitor;
