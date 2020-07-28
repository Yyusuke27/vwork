import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Color from "../../../shared/util/color";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

const defaultProps = {
  m: 1,
  style: { width: "20rem" },
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 10,
    backgroundColor: "",
    height: 185,
  },

  title: {
    fontSize: 18,
  },
  color: {
    backgroundColor: Color.VWORK_BLUE,
  },
  icon: {
    position: "absolute",
    top: "30%",
    left: "30%",
    fontSize: 55,
  },
});

const AttendingProjectArea = () => {
  const classes = useStyles();
  return (
    <>
      <Box borderBottom={1} {...defaultProps} className={classes.title} mt={10}>
        参加しているプロジェクト
      </Box>
      <Typography>
        <Box
          className={classes.color}
          color="white"
          p={2}
          position="relative"
          top={25}
          height={150}
          width={150}
          borderRadius={8}
        >
          <FormatListBulletedIcon className={classes.icon} />
        </Box>
      </Typography>
      <Typography>
        <Box
          className={classes.color}
          color="white"
          p={2}
          position="relative"
          top={25}
          height={150}
          width={150}
          borderRadius={8}
        >
          <FormatListBulletedIcon className={classes.icon} />
        </Box>
      </Typography>
      <Typography>
        <Box
          className={classes.color}
          color="white"
          p={2}
          position="relative"
          top={25}
          height={150}
          width={150}
          borderRadius={8}
        >
          <FormatListBulletedIcon className={classes.icon} />
        </Box>
      </Typography>
      <Typography>
        <Box
          className={classes.color}
          color="white"
          p={2}
          position="relative"
          top={25}
          height={150}
          width={150}
          borderRadius={8}
        >
          <FormatListBulletedIcon className={classes.icon} />
        </Box>
      </Typography>
    </>
  );
};

export default AttendingProjectArea;
