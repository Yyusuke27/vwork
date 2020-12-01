import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardActionArea: {
      height: 80,
    },
    root: {
      width: "100%",
      borderRadius: 10,
      height: 80,
      marginBottom: 15,
      cursor: "pointer",
    },
    title: {
      fontSize: 20,
      paddingLeft: 10,
    },
  })
);

interface WorkSpaceItemProps {
  pathId: string;
  name: string;
}

const WorkSpaceItem: FC<WorkSpaceItemProps> = ({ pathId, name }) => {
  const classes = useStyles();

  return (
    <Box width="100%" mb={3}>
      <CardActionArea
        className={classes.cardActionArea}
        onClick={async () => {
          window.location.href = "/" + pathId;
        }}
      >
        <Card className={classes.root}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ height: 80, margin: "auto" }}
          >
            <Grid item>
              <Typography className={classes.title}>{name}</Typography>
            </Grid>
          </Grid>
        </Card>
      </CardActionArea>
    </Box>
  );
};

export default WorkSpaceItem;
