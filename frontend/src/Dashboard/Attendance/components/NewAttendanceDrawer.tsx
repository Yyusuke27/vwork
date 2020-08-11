import React from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
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
      <VwDrawer open={kintaiCardClicked}>
        <Grid container direction="column">
          <Container maxWidth="md">
            <Grid item onClick={() => dispatch(toggleKintaiCardClicked(false))}>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Grid>
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
