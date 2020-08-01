import React, { FC } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icon: {
    fontSize: 30,
  },
});

interface TaskMemberItemProps {
  name: string;
  icon: string;
}

const TaskMemberItem: FC<TaskMemberItemProps> = ({ name = "", icon = "" }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem button style={{ paddingTop: 0 }}>
        <ListItemIcon>
          <Avatar className={classes.icon}>{icon}</Avatar>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
};

export default TaskMemberItem;
