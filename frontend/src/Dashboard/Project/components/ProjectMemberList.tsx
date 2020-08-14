import React from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Grid from "@material-ui/core/Grid";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ProjectMemberItem from "./ProjectMemberItem";
import NewAddProjectMemberDrawer from "./NewAddProjectMemberDrawer";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAddMemberButton,
  toggleAddMemberButton,
} from "../../../appSlice";

const drawerWidth = "50%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 23,
      width: 300,
    },
    icon: {
      fontSize: 45,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    closeIcon: {
      padding: 0,
    },
    drawerTitle: {
      fontSize: 25,
      width: "85%",
    },
    button: {
      width: 300,
    },
  })
);

const programDate = [
  { name: "柚木将吾", icon: "S" },
  { name: "柚木祐輔", icon: "Y" },
  { name: "柚木郁美", icon: "I" },
];

const ProjectMemberList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const addMemberButton = useSelector(selectAddMemberButton);

  return (
    <>
      <Box borderBottom={1} mt={7} mb={2} className={classes.title}>
        メンバー
      </Box>
      <Grid container direction="column" justify="flex-start">
        <Grid item>
          <ListItem
            button
            onClick={() => dispatch(toggleAddMemberButton(true))}
            style={{ paddingLeft: 0 }}
            data-testid="testId"
          >
            <ListItemIcon>
              <AddCircleOutlineIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="メンバーを追加" />
          </ListItem>
        </Grid>
        <Grid item>
          {programDate.map((date, index) => {
            return (
              <ProjectMemberItem
                name={date.name}
                icon={date.icon}
                key={index}
              />
            );
          })}
        </Grid>
      </Grid>
      {addMemberButton ? <NewAddProjectMemberDrawer /> : ""}
    </>
  );
};

export default ProjectMemberList;
