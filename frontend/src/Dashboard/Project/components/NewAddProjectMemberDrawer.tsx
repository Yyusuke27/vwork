import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddMemberList from "./AddMemberList";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import {
  selectAddMemberButton,
  toggleAddMemberButton,
} from "../../../appSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

const NewAddProjectMemberDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const addMemberButton = useSelector(selectAddMemberButton);
  return (
    <>
      <VwDrawer
        open={addMemberButton}
        click={() => dispatch(toggleAddMemberButton(false))}
      >
        <Container maxWidth="md">
          <Box borderBottom={1} mt={10} mb={5} className={classes.drawerTitle}>
            メンバー
          </Box>
          <AddMemberList />
          <Box mt={40} ml={35}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              招待
            </Button>
          </Box>
        </Container>
      </VwDrawer>
    </>
  );
};

export default NewAddProjectMemberDrawer;
