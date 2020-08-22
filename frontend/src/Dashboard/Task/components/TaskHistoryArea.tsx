import React, { FC, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncTaskHistory, selectTaskHistory } from "../taskSlice";

import { outputLog } from "../../../shared/util/log";

import moment from "moment";

import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Color from "../../../shared/util/color";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    commentArea: {
      backgroundColor: Color.VWORK_WHITE,
      borderRadius: "5px",
      padding: "5px 3px",
      marginLeft: theme.spacing(3),
    },
    logArea: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(3),
    },
    icon: {
      fontSize: "18px",
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  })
);

interface TaskHistoryAreaProps {
  taskId: string;
}

const TaskHistoryArea: FC<TaskHistoryAreaProps> = ({ taskId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const histories = useSelector(selectTaskHistory);

  const getTaskHistory = useCallback(
    async (taskId) => {
      await dispatch(fetchAsyncTaskHistory(taskId));
    },
    [dispatch]
  );

  // historyの最下部にスクロール
  const historyAreaRef = useRef<HTMLDivElement | null>(null);
  const historyAreaHeight = historyAreaRef.current
    ? historyAreaRef.current.scrollHeight
    : 0;

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      if (historyAreaHeight) {
        historyAreaRef.current &&
          historyAreaRef.current.scrollIntoView({ block: "end" });
      }
    } else {
      mounted.current = true;
    }
  }, [historyAreaHeight]);

  useEffect(() => {
    getTaskHistory(taskId);
  }, [getTaskHistory, taskId]);

  return (
    <>
      <Container ref={historyAreaRef}>
        <Box pt={3}>
          {histories.length > 0 &&
            histories.map((history, index) => {
              let content;
              if (history.type === 0) {
                content = (
                  <div>
                    <Grid
                      container
                      alignItems="center"
                      spacing={1}
                      justify="flex-start"
                    >
                      <Grid item>
                        <Avatar className={classes.icon}>
                          {history.log && history.log.user.name.slice(0, 1)}
                        </Avatar>
                      </Grid>
                      <Grid item>{history.log && history.log.user.name}</Grid>
                      <Grid item>
                        {moment(history.createdAt)
                          .utcOffset("+09:00")
                          .format("YYYY/MM/DD HH:mm")}
                      </Grid>
                    </Grid>
                    <p className={classes.logArea}>
                      {history.log &&
                        outputLog(
                          history.log.type,
                          history.log.oldState || "",
                          history.log.newState
                        )}
                    </p>
                  </div>
                );
              }
              if (history.type === 1) {
                content = (
                  <div>
                    <Grid
                      container
                      alignItems="center"
                      spacing={1}
                      justify="flex-start"
                    >
                      <Grid item>
                        <Avatar className={classes.icon}>
                          {history.comment &&
                            history.comment.user.name.slice(0, 1)}
                        </Avatar>
                      </Grid>
                      <Grid item>
                        {history.comment && history.comment.user.name}
                      </Grid>
                      <Grid item>
                        {moment(history.createdAt)
                          .utcOffset("+09:00")
                          .format("YYYY/MM/DD HH:mm")}
                      </Grid>
                    </Grid>
                    <p className={classes.commentArea}>
                      {history.comment && history.comment.comment}
                    </p>
                  </div>
                );
              }
              return <div key={index}>{content}</div>;
            })}
        </Box>
      </Container>
    </>
  );
};

export default TaskHistoryArea;
