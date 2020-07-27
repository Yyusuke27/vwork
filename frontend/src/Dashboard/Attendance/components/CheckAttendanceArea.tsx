import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const defaultProps = {
  m: 1,
  style: { width: "20rem" },
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 10,
    backgroundColor: "vwork-light-blue.color",
    height: 185,
  },

  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

const CheckAttendanceArea = () => {
  const classes = useStyles();

  return (
    <>
      <Box borderBottom={1} {...defaultProps} className={classes.title}>
        勤怠管理
      </Box>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            2020年8月10日
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            p={1}
            m={1}
            className={classes.title}
          >
            <Box p={0} mr={15}>
              出社：
            </Box>
            <Box p={0} mr={15}>
              休憩：
            </Box>
            <Box p={0} mr={15}>
              退社：
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Box
            display="flex"
            justifyContent="flex-end"
            m={1}
            p={1}
            style={{ width: "100%" }}
          >
            <Box p={1}>
              <Button size="small" variant="contained" color="secondary">
                出社
              </Button>
            </Box>
            <Box p={1}>
              <Button size="small" variant="contained">
                休憩
              </Button>
            </Box>
            <Box p={1}>
              <Button size="small" variant="contained">
                退社
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

export default CheckAttendanceArea;
