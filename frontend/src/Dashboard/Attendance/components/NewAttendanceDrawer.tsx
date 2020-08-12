import React from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CheckAttendanceAreaInDetail from "./CheckAttendanceAreaInDetail";
import { useDispatch, useSelector } from "react-redux";
import {
  selectKintaiCardClicked,
  toggleKintaiCardClicked,
} from "../../../appSlice";

const NewAttendanceDrawer = () => {
  const dispatch = useDispatch();
  const kintaiCardClicked = useSelector(selectKintaiCardClicked);
  return (
    <>
      <VwDrawer
        open={kintaiCardClicked}
        click={() => dispatch(toggleKintaiCardClicked(false))}
      >
        <Grid container direction="column">
          <Container maxWidth="md">
            <Grid item>
              <CheckAttendanceAreaInDetail />
            </Grid>
          </Container>
        </Grid>
      </VwDrawer>
    </>
  );
};

export default NewAttendanceDrawer;
