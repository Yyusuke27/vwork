import React, { FC } from "react";
import { useDispatch } from "react-redux";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { toggleMemberIconClicked } from "../../../appSlice";
import { setSelectedMember } from "../projectSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 30,
    },
  })
);

interface ProjectMemberItemProps {
  name: string;
  memberId: string;
}

const ProjectMemberItem: FC<ProjectMemberItemProps> = ({ name, memberId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <ListItem
        button
        style={{ paddingLeft: 0 }}
        onClick={() => {
          dispatch(setSelectedMember(memberId));
          dispatch(toggleMemberIconClicked(true));
        }}
      >
        <ListItemIcon>
          <Avatar className={classes.icon}>{name.slice(0, 1)}</Avatar>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
};

export default ProjectMemberItem;
