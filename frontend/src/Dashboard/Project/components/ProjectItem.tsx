import React, { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import BusinessIcon from "@material-ui/icons/Business";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import TableChartIcon from "@material-ui/icons/TableChart";
import TextureIcon from "@material-ui/icons/Texture";
import TimelineIcon from "@material-ui/icons/Timeline";
import Color from "../../../shared/util/color";
import { workspacePathId } from "../../../shared/util/workspacePathId"

const useStyles = makeStyles({
  icon: {
    fontSize: 55,
  },
  contentWidth: {
    width: 150,
  },
  iconArea: {
    color: "white",
    height: 150,
    borderRadius: 8,
  },
});

interface ProjectItemProps {
  id: string;
  name: string;
  bgColor: Color;
  iconNum: number;
}

const ProjectItem: FC<ProjectItemProps> = ({ id, name, bgColor, iconNum }) => {
  const classes = useStyles();

  const projectIcons = [
    <FormatListBulletedIcon className={classes.icon} />,
    <BusinessIcon className={classes.icon} />,
    <DashboardIcon className={classes.icon} />,
    <EqualizerIcon className={classes.icon} />,
    <TableChartIcon className={classes.icon} />,
    <TextureIcon className={classes.icon} />,
    <TimelineIcon className={classes.icon} />,
  ];
  return (
    <Link to={`/${workspacePathId}/project/${id}`}>
      <Box className={classes.contentWidth} mr={3} mb={3}>
        <Grid container direction="column">
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={clsx(classes.iconArea, classes.contentWidth)}
            style={{ backgroundColor: bgColor }}
          >
            {projectIcons[iconNum]}
          </Grid>
          <Grid item className={classes.contentWidth}>
            <Box textAlign="center">
              <Typography>{name}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};

export default ProjectItem;
