import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import { toggleTaskCardClicked } from "../../../appSlice";
import { setSelectedTask } from "../taskSlice";
import Color from "../../../shared/util/color";

import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Chip from "@material-ui/core/Chip";
import { fetchAsyncGetProject } from "../../Project/projectSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      borderRadius: 10,
      height: 80,
      marginBottom: 15,
      cursor: "pointer",
    },
    cardActionArea: {
      height: 80,
    },
    avatar: {
      backgroundColor: Color.VWORK_RED,
    },
  })
);

interface TaskItemProps {
  data: {
    name: string;
    project: { _id: string; name: string };
    endDateAt: string;
    _id: string;
    user: { _id: string; name: string };
  };
  iconType?: string;
}

const TaskItem: FC<TaskItemProps> = ({ iconType = "", data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getProject = useCallback(
    async (projectId) => {
      await dispatch(fetchAsyncGetProject(projectId));
    },
    [dispatch]
  );

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea
          className={classes.cardActionArea}
          onClick={() => {
            dispatch(setSelectedTask(data._id));
            if (data.project && data.project._id) {
              getProject(data.project._id);
            }
            dispatch(toggleTaskCardClicked(true));
          }}
          data-testid="test"
        >
          <Grid
            container
            alignItems="center"
            style={{ height: 80, padding: "10px", boxSizing: "border-box" }}
            spacing={2}
          >
            <Grid item xs={6}>
              <Grid
                container
                wrap="nowrap"
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  {iconType === "alert" ? (
                    <ErrorOutlineIcon color="primary" />
                  ) : (
                    <CheckCircleIcon color="secondary" />
                  )}
                </Grid>
                <Grid item>
                  <Typography variant="body1">{data.name}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs alignItems="center">
              <Grid item>
                {data.project && data.project.name ? (
                  <Chip
                    label={data.project.name}
                    variant="outlined"
                    color="secondary"
                  />
                ) : (
                  <Chip label="プロジェクト未選択" variant="outlined" />
                )}
              </Grid>
            </Grid>
            <Grid item container xs alignItems="center" spacing={1}>
              <Grid item>
                <AccessTimeIcon color="disabled" />
              </Grid>
              <Grid item>
                <Typography>
                  {data.endDateAt
                    ? moment(data.endDateAt).format("YYYY/MM/DD")
                    : ""}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              {data.user.name ? (
                <Avatar className={classes.avatar}>
                  {data.user.name.slice(0, 1)}
                </Avatar>
              ) : (
                <Avatar>V</Avatar>
              )}
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </>
  );
};

export default TaskItem;
