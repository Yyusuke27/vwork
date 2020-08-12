import React from "react";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import TaskList from "../../Task/components/TaskList";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMemberIconClicked,
  toggleMemberIconClicked,
} from "../../../appSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    closeIcon: {
      padding: 0,
    },
    box: {
      border: 1,
      width: 300,
      height: 300,
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo192.png)`,
      backgroundSize: "cover",
      marginRight: 200,
      borderRadius: "50%",
    },
    profile: {
      fontSize: 20,
    },
  })
);

const ProjectMemberClickedDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const MemberIconClicked = useSelector(selectMemberIconClicked);
  return (
    <>
      <VwDrawer
        open={MemberIconClicked}
        click={() => dispatch(toggleMemberIconClicked(false))}
      >
        <Box mt={13}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Container maxWidth="md">
              <Grid item>
                <Grid container direction="row" justify="space-between">
                  <Grid xs={6} item>
                    <Box className={classes.box}></Box>
                  </Grid>
                  <Grid xs={6} item className={classes.profile}>
                    <dl>
                      <dt>氏名</dt>
                      <dd>柚木将吾</dd>
                    </dl>
                    <dl>
                      <dt>メールアドレス</dt>
                      <dd>Shogo@gmail.com</dd>
                    </dl>
                    <dl>
                      <dt>役職・担当</dt>
                      <dd>エンジニア</dd>
                    </dl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                onClick={() => dispatch(toggleMemberIconClicked(false))}
              >
                <TaskList title="プロジェクト内担当タスク" />
              </Grid>
            </Container>
          </Grid>
        </Box>
      </VwDrawer>
    </>
  );
};

export default ProjectMemberClickedDrawer;
