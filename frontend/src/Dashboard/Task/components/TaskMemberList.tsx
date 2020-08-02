import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Grid from "@material-ui/core/Grid";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import TaskMemberItem from "./TaskMemberItem";

const defaultProps = {
  m: 1,
  style: { width: "20rem" },
};

const useStyles = makeStyles({
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 45,
  },
});

const programDate = [
  { name: "SHOGO YUNOKI", icon: "S" },
  { name: "YUSUKE YUNOKI", icon: "Y" },
  { name: "IKUMI YUNOKI", icon: "I" },
];

const TaskMemberList = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        borderBottom={1}
        {...defaultProps}
        className={classes.title}
        mt={10}
        mb={3}
      >
        メンバー
      </Box>
      <Grid container direction="column" justify="flex-start">
        <Grid item>
          <ListItem button style={{ paddingTop: 0 }}>
            <ListItemIcon>
              <AddCircleOutlineIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="メンバーを追加" />
          </ListItem>
        </Grid>
        <Grid item>
          {programDate.map((date, index) => {
            return (
              <TaskMemberItem name={date.name} icon={date.icon} key={index} />
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default TaskMemberList;
