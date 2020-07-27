import React from "react";
import MainHeader from "./MainHeader";
import SideBar from "./SideBar";

const MainNavigation = () => {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MainHeader handleDrawerOpen={handleDrawerOpen} open={open} />
      <SideBar handleDrawerClose={handleDrawerClose} open={open} />
    </>
  );
};

export default MainNavigation;
