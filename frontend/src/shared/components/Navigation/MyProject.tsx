import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

const defaultProps = {
  m: 1,
  style: { width: "20rem" },
};

const useStyles = makeStyles({
  title: {
    fontSize: 15,
    marginTop: 70,
  },
});

const MyProject = () => {
  const classes = useStyles();
  return (
    <>
      <Box borderBottom={0.5} {...defaultProps} className={classes.title}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Typography>マイプロジェクト</Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MyProject;
