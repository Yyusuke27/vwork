import React, { useContext } from "react";
import AppContext from "../../../AppContext";
import VwDrawer from "../../../shared/components/Common/VwDrawer";

const NewTaskAddDrawer = () => {
  const { addButton, handleCloseAddButton } = useContext(AppContext);
  return (
    <>
      <VwDrawer open={addButton} click={handleCloseAddButton}></VwDrawer>
    </>
  );
};

export default NewTaskAddDrawer;
