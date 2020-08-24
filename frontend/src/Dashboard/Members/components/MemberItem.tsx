import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 30,
    },
  })
);

interface MemberItemProps {
  name: string;
  _id: string;
}

const MemberItem: FC<MemberItemProps> = ({ name = "", _id }) => {
  const classes = useStyles();

  return (
    <>
      <ListItem
        button
        style={{ paddingLeft: 0 }}
        component={NavLink}
        to={`/members/${_id}`}
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
