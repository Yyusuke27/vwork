import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import Typography from "@material-ui/core/Typography";
import Color from "../../../shared/util/color";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      position: "absolute",
      height: 25,
      width: 145,
      backgroundColor: Color.VWORK_DARK_BLUE,
      color: Color.VWORK_WHITE,
      top: "100%",
      left: "10%",
      fontsize: 40,
    },
    select: {
      position: "absolute",
      height: 5,
      width: 200,
      top: "100%",
      left: "60%",
      fontsize: 40,
    },
  })
);

const TaskAdd = () => {
  const classes = useStyles();
  const top100Films = [
    { title: "未完了のタスク" },
    { title: "未完了のタスク" },
    { title: "未完了のタスク" },
  ];

  return (
    <>
      <Typography style={{ position: "relative", width: "100%" }}>
        <Button className={classes.button} startIcon={<AddIcon />}>
          タスクを追加
        </Button>
      </Typography>
      <Typography style={{ position: "relative", width: "100%" }}>
        <Autocomplete
          options={top100Films}
          getOptionLabel={(option) => option.title}
          className={classes.select}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
      </Typography>
    </>
  );
};

export default TaskAdd;
