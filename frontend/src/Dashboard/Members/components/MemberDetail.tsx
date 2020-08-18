import React from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import WorkIcon from "@material-ui/icons/Work";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    closeIcon: {
      padding: 0,
    },
    profile: {
      fontSize: 25,
    },
    profileTitle: {
      color: "#9e9e9e",
    },
    profileItem: {
      margin: 0,
    },
    root: {
      flexGrow: 1,
      maxWidth: "100%",
    },
  })
);

const MemberDetail = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const history = useHistory();
  const handlePageChangeToKintai = () => {
    history.push("/members/1");
  };

  const handlePageChangeToProject = () => {
    history.push("/members/1/project");
  };

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ width: "100%" }}
          >
            <Grid item className={classes.profile}>
              <dl>
                <dt className={classes.profileTitle}>氏名</dt>
                {/*<dd className={classes.profileItem}>{member.user.name}</dd>*/}
                <dd className={classes.profileItem}>Shogo</dd>
              </dl>
            </Grid>
            <Grid item className={classes.profile}>
              <dl>
                <dt className={classes.profileTitle}>メールアドレス</dt>
                {/*<dd className={classes.profileItem}>{member.user.email}</dd>*/}
                <dd className={classes.profileItem}>test@test.com</dd>
              </dl>
            </Grid>
            <Grid item className={classes.profile}>
              <dl>
                <dt className={classes.profileTitle}>役職・担当</dt>
                {/*<dd className={classes.profileItem}>*/}
                {/*  {member.profile && member.profile.position}*/}
                {/*</dd>*/}
                <dd className={classes.profileItem}>CEO</dd>
              </dl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box mt={5}>
            <Paper square className={classes.root}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
              >
                <Tab
                  icon={<QueryBuilderIcon />}
                  label="勤怠情報"
                  onClick={handlePageChangeToKintai}
                />
                <Tab
                  icon={<WorkIcon />}
                  label="プロジェクト"
                  onClick={handlePageChangeToProject}
                />
              </Tabs>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MemberDetail;
