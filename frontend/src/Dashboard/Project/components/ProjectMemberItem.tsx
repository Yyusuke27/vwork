import React, { FC, useContext } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppContext from "../../../AppContext";
import NewProjectMemberDetailDrawer from "./NewProjectMemberDetailDrawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 30,
    },
  })
);

interface TaskMemberItemProps {
  name: string;
  icon: string;
}

const ProjectMemberItem: FC<TaskMemberItemProps> = ({
  name = "",
  icon = "",
}) => {
  const classes = useStyles();
  const { projectMemberDrawerOpen } = useContext(AppContext);
  return (
    <>
      <ListItem
        button
        style={{ paddingLeft: 0 }}
        onClick={projectMemberDrawerOpen}
      >
        <ListItemIcon>
          <Avatar className={classes.icon}>{icon}</Avatar>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
      <NewProjectMemberDetailDrawer />
    </>
  );
};

export default ProjectMemberItem;
