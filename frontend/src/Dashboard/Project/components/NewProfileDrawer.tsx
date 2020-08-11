import React from "react";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSetProfileClicked,
  toggleSetProfileClicked,
} from "../../../appSlice";

const NewProfileDrawer = () => {
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

export default NewProfileDrawer;
