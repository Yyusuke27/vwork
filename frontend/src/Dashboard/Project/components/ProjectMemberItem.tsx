import React, { FC, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Backdrop from "@material-ui/core/Backdrop";
import { Box } from "@material-ui/core";
import TaskInProjectList from "../../Task/components/TaskInProjectList";

const drawerWidth = "55%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 30,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    box: {
      border: 1,
      width: 300,
      height: 300,
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo192.png)`,
      backgroundSize: "cover",
      marginRight: 200,
    },
  })
);

interface TaskMemberItemProps {
  name: string;
  icon: string;
}

const ProjectMemberItem: FC<TaskMemberItemProps> = ({
  name = "",
  icon = "",
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <ListItem button style={{ paddingLeft: 0 }} onClick={handleDrawerOpen}>
        <ListItemIcon>
          <Avatar className={classes.icon}>{icon}</Avatar>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ marginTop: "15%" }}
          >
            <Container maxWidth="md">
              <Grid item>
                <Grid container direction="row" justify="space-between">
                  <Grid xs={6} item>
                    <Box borderRadius="50%" className={classes.box}></Box>
                  </Grid>
                  <Grid xs={6} item style={{ fontSize: 20 }}>
                    <dl>
                      <dt>氏名</dt>
                      <dd>SHOGO YUNOKI</dd>
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
              <Grid item>
                <TaskInProjectList />
              </Grid>
            </Container>
          </Grid>
        </Drawer>
      </Backdrop>
    </>
  );
};

export default ProjectMemberItem;
