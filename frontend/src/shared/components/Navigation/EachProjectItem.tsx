import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import Color from "../../util/color";

const useStyles = makeStyles({
  iconstyle: {
    color: Color.VWORK_BLUE,
  },
});

const EachProjectItem = () => {
  const classes = useStyles();
  return (
    <>
      <List style={{ padding: 0 }}>
        <ListItem button style={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItemIcon>
            <Brightness1Icon className={classes.iconstyle} />
          </ListItemIcon>
          <ListItemText primary="UI改修" />
        </ListItem>
        <ListItem button style={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItemIcon>
            <Brightness1Icon className={classes.iconstyle} />
          </ListItemIcon>
          <ListItemText primary="UI改修" />
        </ListItem>
        <ListItem button style={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItemIcon>
            <Brightness1Icon className={classes.iconstyle} />
          </ListItemIcon>
          <ListItemText primary="UI改修" />
        </ListItem>
      </List>
    </>
  );
};

export default EachProjectItem;
