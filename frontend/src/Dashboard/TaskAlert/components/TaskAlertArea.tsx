import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";

const defaultProps = {
  m: 1,
  style: { width: "20rem" },
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 10,
    backgroundColor: "vwork-light-blue.color",
    height: 80,
    marginTop: 25,
  },

  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

const TaskAlertArea = () => {
  const classes = useStyles();

  return (
    <>
      <Box borderBottom={1} {...defaultProps} className={classes.title} mt={10}>
        期限が近いタスク
      </Box>
      <Card className={classes.root}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
            pb={4}
          >
            <ListItem button>
              <ListItemIcon>
                <ErrorOutlineIcon style={{ color: red[500] }} />
              </ListItemIcon>
              <ListItemText primary="管理画面のUIデザイン見直し" />
            </ListItem>
            <ListItem button className={classes.title}>
              <ListItemIcon>
                プロジェクト名
                <AccessTimeIcon />
                2020/8/15
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemIcon>
              <ListItemText />
            </ListItem>
          </Box>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
            pb={4}
          >
            <ListItem button>
              <ListItemIcon>
                <ErrorOutlineIcon style={{ color: red[500] }} />
              </ListItemIcon>
              <ListItemText primary="管理画面のUIデザイン見直し" />
            </ListItem>
            <ListItem button className={classes.title}>
              <ListItemIcon>
                プロジェクト名
                <AccessTimeIcon />
                2020/8/15
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemIcon>
              <ListItemText />
            </ListItem>
          </Box>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
            pb={4}
          >
            <ListItem button>
              <ListItemIcon>
                <ErrorOutlineIcon style={{ color: red[500] }} />
              </ListItemIcon>
              <ListItemText primary="管理画面のUIデザイン見直し" />
            </ListItem>
            <ListItem button className={classes.title}>
              <ListItemIcon>
                プロジェクト名
                <AccessTimeIcon />
                2020/8/15
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
