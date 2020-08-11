import React, { useContext } from "react";
import AppContext from "../../../AppContext";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CheckAttendanceAreaInDetail from "./CheckAttendanceAreaInDetail";

const NewAttendanceDrawer = () => {
  const { attendanceCard, handleAttendanceCardClose } = useContext(AppContext);
  return (
    <>
      <VwDrawer open={attendanceCard}>
        <Grid container direction="column">
          <Container maxWidth="md">
            <Grid item onClick={handleAttendanceCardClose}>
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
