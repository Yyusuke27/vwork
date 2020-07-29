import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";

const useStyles = makeStyles({
  icon: {
    fontSize: 55,
  },
  iconArea: {
    color: "white",
    height: 150,
    borderRadius: 8,
  },
  contentWidth: {
    width: 150,
  },
});

interface ProjectItemProps {
  name: string;
  bgcolor: Color;
}

const ProjectItem: FC<ProjectItemProps> = ({ name = "", bgcolor }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.contentWidth} mr={3} mb={3}>
        <Grid container direction="column">
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={clsx(classes.iconArea, classes.contentWidth)}
            style={{ backgroundColor: bgcolor }}
          >
            <FormatListBulletedIcon className={classes.icon} />
          </Grid>
          <Grid item className={classes.contentWidth}>
            <Box textAlign="center">
              <Typography>{name}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectItem;
