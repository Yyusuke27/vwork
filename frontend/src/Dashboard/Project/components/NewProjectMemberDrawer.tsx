import React, { useContext } from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import AppContext from "../../../AppContext";

const NewProjectMemberDrawer = () => {
  const { openMember, CloseMember } = useContext(AppContext);
  return (
    <>
      <VwDrawer open={openMember} click={CloseMember}></VwDrawer>
    </>
  );
};

export default NewProjectMemberDrawer;
