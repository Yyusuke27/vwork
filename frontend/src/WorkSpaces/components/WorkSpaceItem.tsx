import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAsyncUpdateUser, selectUser } from "../../Auth/authSlice";

import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

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
    cardActionArea: {
      height: 80,
    },
  })
);

interface WorkSpaceItemProps {
  id: string;
  name: string;
}

const WorkSpaceItem: FC<WorkSpaceItemProps> = ({ id, name }) => {
  const classes = useStyles();

  const userData = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Box width="100%" mb={3}>
      <CardActionArea
        className={classes.cardActionArea}
        onClick={async () => {
          await dispatch(
            fetchAsyncUpdateUser({
              userId: userData._id,
              postData: { lastAccessWorkspace: id },
            })
          );
          window.location.href = "/";
        }}
      >
        <Card className={classes.root}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ height: 80, margin: "auto" }}
          >
            <Grid item>
              <Typography className={classes.title}>{name}</Typography>
            </Grid>
          </Grid>
        </Card>
      </CardActionArea>
    </Box>
  );
};

export default WorkSpaceItem;
