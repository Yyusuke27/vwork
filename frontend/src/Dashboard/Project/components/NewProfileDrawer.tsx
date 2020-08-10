import React, { useContext } from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import AppContext from "../../../AppContext";

const NewProfileDrawer = () => {
  const { openProfile, CloseProfile } = useContext(AppContext);
  return (
    <>
      <VwDrawer open={openProfile} click={CloseProfile}></VwDrawer>
    </>
  );
};

export default NewProfileDrawer;
