import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Color from "../../shared/util/color";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "70vh",
    padding: theme.spacing(10, 4),
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    backgroundColor: Color.VWORK_WHITE,
    borderRadius: 20,
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

interface FormAreaProps {
  buttonPath: string;
  buttonText: string;
}

const FormArea: FC<FormAreaProps> = ({ children, buttonText, buttonPath }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box display="flex" alignItems="center">
          <div className={classes.logoIcon}></div>
          <Typography
            display="inline"
            component="h2"
            variant="h4"
            className="logo"
          >
            VWORK
          </Typography>
        </Box>
        <Link to={buttonPath}>
          <Button color="primary" variant="outlined">
            {buttonText}
          </Button>
        </Link>
      </Box>
      <div className={classes.paper}>{children}</div>
    </Container>
  );
};

export default FormArea;
