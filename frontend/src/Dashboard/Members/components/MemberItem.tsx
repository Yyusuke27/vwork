import React, { FC } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router";

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
  const history = useHistory();
  const handlePageChange = () => {
    history.push("/members/:id");
  };
  return (
    <>
      <ListItem button style={{ paddingLeft: 0 }} onClick={handlePageChange}>
        <ListItemIcon>
          <Avatar className={classes.icon}>{name.slice(0, 1)}</Avatar>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
};

export default MemberItem;
