import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import { useSelector, useDispatch } from "react-redux";
import { selectAddedTaskText, toggleAddedTaskText } from "../../../appSlice";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 23,
    },
  })
);

const AddedTaskTextAfterWorkDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const addedTaskText = useSelector(selectAddedTaskText);
  return (
    <>
      <VwDrawer
        open={addedTaskText}
        click={() => dispatch(toggleAddedTaskText(false))}
      >
        <Container maxWidth="md">
          <Grid container direction="column">
            <Box mt={5}>
              <Grid item style={{ width: "35%" }}>
                <Box borderBottom={1} className={classes.title}>
                  今日行ったタスク
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </VwDrawer>
    </>
  );
};

export default AddedTaskTextAfterWorkDrawer;
