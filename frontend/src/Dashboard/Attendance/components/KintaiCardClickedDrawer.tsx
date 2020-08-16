import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckAttendanceAreaInDetail from "./CheckAttendanceAreaInDetail";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  selectKintaiCardClicked,
  toggleKintaiCardClicked,
} from "../../../appSlice";
import {
  fetchAsyncGetAttendance,
  selectSelectedAttenances,
} from "../attendanceSlice";
import { selectWorkspace } from "../../../Auth/authSlice";
import { setAttendance } from "../attendanceSlice";

const KintaiCardClickedDrawer = () => {
  const dispatch = useDispatch();
  const kintaiCardClicked = useSelector(selectKintaiCardClicked);
  const selectedAttendance = useSelector(selectSelectedAttenances);
  const workspace = useSelector(selectWorkspace);

  const getAttendance = useCallback(
    async (workspace, selectedAttendance) => {
      await dispatch(
        fetchAsyncGetAttendance({
          workspace: workspace,
          id: selectedAttendance,
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (workspace && selectedAttendance) {
      getAttendance(workspace, selectedAttendance);
    }
  }, [getAttendance, workspace, selectedAttendance]);

  return (
    <>
      <VwDrawer
        open={kintaiCardClicked}
        click={() => {
          dispatch(toggleKintaiCardClicked(false));
          dispatch(
            setAttendance({
              tasks: [],
              _id: "",
              user: "",
              workspace: "",
              createdAt: "",
              startedAt: "",
              endedAt: "",
              restStartedAt: "",
              restEndedAt: "",
              comment: "",
            })
          );
        }}
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

export default KintaiCardClickedDrawer;
