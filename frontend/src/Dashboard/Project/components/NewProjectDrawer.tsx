import React from "react";
import { useSelector, useDispatch } from "react-redux";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import {
  selectAddProjectButton,
  toggleAddProjectButton,
} from "../../../appSlice";

const NewProjectDrawer = () => {
  const dispatch = useDispatch();
  const addProjectClicked = useSelector(selectAddProjectButton);

  return (
    <>
      <VwDrawer
        open={addProjectClicked}
        click={() => dispatch(toggleAddProjectButton(false))}
      ></VwDrawer>
    </>
  );
};

export default NewProjectDrawer;
