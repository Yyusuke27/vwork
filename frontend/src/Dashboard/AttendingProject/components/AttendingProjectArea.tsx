import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const defaultProps = {
  m: 1,
  style: { width: "20rem" },
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 10,
    backgroundColor: "",
    height: 185,
  },

  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

const AttendingProjectArea = () => {
  const classes = useStyles();
  return (
    <>
      <Box borderBottom={1} {...defaultProps} className={classes.title}>
        参加しているプロジェクト
      </Box>
    </>
  );
};

export default AttendingProjectArea;
