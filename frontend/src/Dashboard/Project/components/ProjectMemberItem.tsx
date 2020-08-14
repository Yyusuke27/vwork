import React, { FC } from "react";
import { useDispatch } from "react-redux";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { toggleMemberIconClicked } from "../../../appSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 30,
    },
  })
);

interface ProjectMemberItemProps {
  name: string;
  icon: string;
}

const ProjectMemberItem: FC<ProjectMemberItemProps> = ({
  name = "",
  icon = "",
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <ListItem
        button
        style={{ paddingLeft: 0 }}
        onClick={() => dispatch(toggleMemberIconClicked(true))}
        data-testid="test"
      >
        <ListItemIcon>
          <Avatar className={classes.icon}>{icon}</Avatar>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
};

export default ProjectMemberItem;
