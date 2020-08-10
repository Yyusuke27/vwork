import React, { useContext } from "react";
import AppContext from "../../../AppContext";
import VwDrawer from "../../../shared/components/Common/VwDrawer";

const NewTaskDrawer = () => {
  const { openTask, CloseTask } = useContext(AppContext);
  return (
    <>
      <VwDrawer open={openTask} click={CloseTask}></VwDrawer>
    </>
  );
};

export default NewTaskDrawer;
