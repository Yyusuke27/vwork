import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import EacProjectList from "./EachProjectList";

const defaultProps = {
  m: 2,
  style: { width: "13rem" },
  borderColor: "text.primary",
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
      <Box borderBottom={1} {...defaultProps} className={classes.title}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography>マイプロジェクト</Typography>
          </Grid>
          <Grid item>
            <IconButton style={{ padding: 0 }}>
              <AddIcon style={{ borderRadius: 10 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <EacProjectList />
    </>
  );
};

export default MyProject;
