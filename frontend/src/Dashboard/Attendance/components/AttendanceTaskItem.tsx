import React, { FC } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import Color from "../../../shared/util/color";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { toggleAttendanceTaskCardClicked } from "../../../appSlice";
import { setSelectedAttendanceTask } from "../attendanceSlice";

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

interface AttendanceTaskItemProps {
  data: {
    name: string;
    description: string;
    startDateAt: string;
    endDateAt: string;
    state: number;
    progress: number;
    priority: number;
    id: string;
  };
  iconType?: string;
}

const AttendanceTaskItem: FC<AttendanceTaskItemProps> = ({ iconType = "", data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea
          className={classes.cardActionArea}
          onClick={() => {
            console.log(data);
            
            dispatch(setSelectedAttendanceTask(data));
            dispatch(toggleAttendanceTaskCardClicked(true));
          }}
          data-testid="test"
        >
          <Grid
            container
            alignItems="center"
            justify="space-between"
            style={{ height: 80, padding: "10px", boxSizing: "border-box" }}
            spacing={2}
          >
            <Grid item xs={5}>
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
            <Grid item container xs alignItems="center" justify="flex-end">
              <Grid item container xs={3} alignItems="center" spacing={1}>
                <Grid item>
                  <Typography>
                    {data.endDateAt
                      ? moment(data.endDateAt).format("YYYY/MM/DD")
                      : ""}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </>
  );
};

export default AttendanceTaskItem;
