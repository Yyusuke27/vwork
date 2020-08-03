import React from "react";
import TaskInTaikinItem from "./TaskInTaikinItem";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Container from "@material-ui/core/Container";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      borderRadius: 10,
      height: 80,
      marginBottom: 15,
      cursor: "pointer",
    },
    title: {
      fontsize: 40,
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

const taskdata = [
  { title: "UI画面の改装" },
  { title: "UI画面の改装" },
  { title: "UI画面の改装" },
];

const TaskInTaikinList = () => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setText(event.target.value as string);
  };
  return (
    <>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ marginTop: "3%" }}
        >
          <Grid item>
            <Box borderBottom={1} style={{ fontSize: 30, width: 500 }}>
              タスク
            </Box>
          </Grid>
          <Grid item>
            <FormControl className={classes.margin}>
              <NativeSelect
                value={text}
                onChange={handleChange}
                input={<BootstrapInput />}
                style={{ width: 200 }}
              >
                <option value={"未完了のタスク"}>未完了のタスク</option>
                <option value={"未完了のタスク"}>未完了のタスク</option>
                <option value={"未完了のタスク"}>未完了のタスク</option>
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
        {taskdata.map((date, index) => {
          return <TaskInTaikinItem title={date.title} key={index} />;
        })}
      </Container>
    </>
  );
};

export default TaskInTaikinList;
