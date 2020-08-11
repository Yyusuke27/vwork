import React from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import { useSelector, useDispatch } from "react-redux";
import { selectAddTaskButton, toggleAddTaskButton } from "../../../appSlice";

const NewTaskAddDrawer = () => {
  const dispatch = useDispatch();
  const taskAddButton = useSelector(selectAddTaskButton);
  return (
    <>
      <VwDrawer
        open={taskAddButton}
        click={() => dispatch(toggleAddTaskButton(false))}
      ></VwDrawer>
    </>
  );
};

export default NewTaskAddDrawer;
