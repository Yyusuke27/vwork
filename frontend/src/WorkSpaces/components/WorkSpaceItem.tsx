import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      borderRadius: 10,
      height: 80,
      marginBottom: 15,
      cursor: "pointer",
    },
    title: {
      fontSize: 20,
      paddingLeft: 10,
    },
  })
);

const WorkSpaceItem = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ marginTop: "5%" }}
      >
        <Grid item style={{ width: "30%" }}>
          <Box borderBottom={1} className={classes.title}>
            WORKSPACE一覧
          </Box>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: 20 }}>
        <Card className={classes.root}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ height: 80, margin: "auto" }}
          >
            <Grid item>
              <Typography className={classes.title}>UI画面の実装</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default WorkSpaceItem;
