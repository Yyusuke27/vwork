import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Grid from "@material-ui/core/Grid";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ProjectMemberItem from "./ProjectMemberItem";
import NewAddProjectMemberDrawer from "./NewAddProjectMemberDrawer";
import {
  selectAddMemberButton,
  toggleAddMemberButton,
} from "../../../appSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 23,
      width: 300,
    },
    icon: {
      fontSize: 45,
    },
  })
);

interface ProjectMemberListProps {
  members: {
    active: boolean;
    email: string;
    name: string;
    registration: boolean;
    role: string;
    id: string;
  }[];
}

const ProjectMemberList: FC<ProjectMemberListProps> = ({ members }) => {
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
          >
            <ListItemIcon>
              <AddCircleOutlineIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="メンバーを追加" />
          </ListItem>
        </Grid>
        <Grid item>
          {members &&
            members.map((member, index) => {
              return (
                <ProjectMemberItem
                  name={member.name}
                  key={index}
                  memberId={member.id}
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
