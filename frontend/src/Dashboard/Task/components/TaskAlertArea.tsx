import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { makeStyles } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";

const defaultProps = {
  m: 1,
  style: { width: "20rem" },
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 10,
    height: 80,
  },

  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  color: {
    color: Color.VWORK_RED,
  },
});

const TaskAlertArea = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        borderBottom={1}
        {...defaultProps}
        className={classes.title}
        mt={10}
        mb={3}
      >
        期限が近いタスク
      </Box>
      <Card className={classes.root}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
            pb={1}
          >
            <ListItem button>
              <ListItemIcon>
                <ErrorOutlineIcon className={classes.color} />
              </ListItemIcon>
              <ListItemText
                primary="管理画面のUIデザイン見直し"
                className={classes.title}
              />
            </ListItem>
            <ListItem button className={classes.title}>
              <ListItemIcon>
                プロジェクト名
                <AccessTimeIcon />
                2020/08/15
                {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />*/}
              </ListItemIcon>
              <ListItemText />
            </ListItem>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default TaskAlertArea;
