import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";
import Box from "@material-ui/core/Box";
import { toggleKintaiCardClicked } from "../../../appSlice";
import { useDispatch } from "react-redux";
import TaskList from "../../Task/components/TaskList";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 10,
      backgroundColor: Color.VWORK_LIGHT_BLUE,
      height: 185,
      marginTop: 25,
      width: "60%",
    },
    title: {
      fontSize: 20,
    },
  })
);

const CheckAttendanceAreaInDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Container maxWidth="md">
        <Box mt={6}>
          <Grid container direction="column">
            <Grid item>DatePickerと連動</Grid>
            <Grid item>
              <Card className={classes.root}>
                <Grid
                  container
                  direction="column"
                  justify="space-between"
                  className={classes.title}
                >
                  <Box mt={3} ml={3}>
                    <Grid item>出社:</Grid>
                  </Box>
                  <Box mt={3} ml={3}>
                    <Grid item>休憩:</Grid>
                  </Box>
                  <Box mt={3} ml={3}>
                    <Grid item>退社:</Grid>
                  </Box>
                </Grid>
              </Card>
            </Grid>
            <Box mt={3}>
              <Grid
                item
                onClick={() => dispatch(toggleKintaiCardClicked(false))}
              >
                <TaskList title="対応タスク" />
              </Grid>
            </Box>
            <Box mt={3}>
              <Grid item>
                <Grid container direction="column" justify="flex-start">
                  <Box mt={6}>
                    <Grid item>
                      <Grid container direction="row">
                        <Box mr={2}>
                          <Grid item>
                            <ChatBubbleIcon />
                          </Grid>
                        </Box>
                        <Grid item className={classes.title}>
                          振り返り
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box mt={1}>
                    <Grid item>
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default CheckAttendanceAreaInDetail;
