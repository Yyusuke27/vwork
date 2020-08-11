import React from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTaskCardClicked,
  toggleTaskCardClicked,
} from "../../../appSlice";

const NewTaskCardClickedDrawer = () => {
  const dispatch = useDispatch();
  const taskCardClicked = useSelector(selectTaskCardClicked);
  return (
    <>
      <VwDrawer
        open={taskCardClicked}
        click={() => dispatch(toggleTaskCardClicked(false))}
      ></VwDrawer>
    </>
  );
};

export default NewTaskCardClickedDrawer;
