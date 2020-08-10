import React, { useContext } from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import AppContext from "../../../AppContext";

const NewTaskCardClickedDrawer = () => {
  const { openDrawer, handleCloseHandler } = useContext(AppContext);
  return (
    <>
      <VwDrawer open={openDrawer} click={handleCloseHandler}></VwDrawer>
    </>
  );
};

export default NewTaskCardClickedDrawer;
