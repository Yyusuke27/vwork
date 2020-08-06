import React, { FC } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import Color from "../../util/color";
import { NavLink } from "react-router-dom";

interface EachProjectItemProps {
  title: string;
  bgColor: Color;
}

const EachProjectItem: FC<EachProjectItemProps> = ({ title = "", bgColor }) => {
  // const classes = useStyles();
  return (
    <>
      <List style={{ padding: 0 }}>
        <ListItem
          button
          style={{ paddingTop: 0, paddingBottom: 0 }}
          component={NavLink}
          to="/my_project"
          exact
        >
          <ListItemIcon>
            <Brightness1Icon style={{ color: bgColor }} />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      </List>
    </>
  );
};

export default EachProjectItem;
