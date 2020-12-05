import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import Color from "../../../shared/util/color";
import { workspacePathId } from "../../../shared/util/workspacePathId"

interface SideProjectItemProps {
  title: string;
  bgColor: Color;
  projectId: string;
}

const SideProjectItem: FC<SideProjectItemProps> = ({
  title = "",
  bgColor,
  projectId,
}) => {
  return (
    <>
      <List style={{ padding: 0 }}>
        <ListItem
          button
          style={{ paddingTop: 0, paddingBottom: 0 }}
          component={NavLink}
          to={`${workspacePathId}/project/${projectId}`}
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

export default SideProjectItem;
