import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { workspacePathId } from "../../../shared/util/workspacePathId"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 30,
    },
  })
);

interface MemberItemProps {
  name: string;
  id: string;
}

const MemberItem: FC<MemberItemProps> = ({ name = "", id }) => {
  const classes = useStyles();

  return (
    <>
      <ListItem
        button
        style={{ paddingLeft: 0 }}
        component={NavLink}
        to={`/${workspacePathId}/members/${id}`}
        exact
      >
        <ListItemIcon>
          <Avatar className={classes.icon}>{name.slice(0, 1)}</Avatar>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
};

export default MemberItem;
