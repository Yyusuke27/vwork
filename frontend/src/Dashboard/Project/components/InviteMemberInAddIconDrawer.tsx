import React from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import { useSelector, useDispatch } from "react-redux";
import {
  selectInviteMemberClicked,
  toggleInviteMemberClicked,
} from "../../../appSlice";
const InviteMemberInAddIconDrawer = () => {
  const dispatch = useDispatch();
  const inviteMemberClicked = useSelector(selectInviteMemberClicked);
  return (
    <>
      <VwDrawer
        open={inviteMemberClicked}
        click={() => dispatch(toggleInviteMemberClicked(false))}
      ></VwDrawer>
    </>
  );
};

export default InviteMemberInAddIconDrawer;
