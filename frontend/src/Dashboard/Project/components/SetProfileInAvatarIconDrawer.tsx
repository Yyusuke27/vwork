import React from "react";
import { useSelector, useDispatch } from "react-redux";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import {
  selectSetProfileClicked,
  toggleSetProfileClicked,
} from "../../../appSlice";

const SetProfileInAvatarIconDrawer = () => {
  const dispatch = useDispatch();
  const profileClicked = useSelector(selectSetProfileClicked);
  return (
    <>
      <VwDrawer
        open={profileClicked}
        click={() => dispatch(toggleSetProfileClicked(false))}
      ></VwDrawer>
    </>
  );
};

export default SetProfileInAvatarIconDrawer;
