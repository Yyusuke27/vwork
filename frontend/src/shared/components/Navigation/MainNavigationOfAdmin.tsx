import React from "react";
import MainHeaderOfAdmin from "./MainHeaderOfAdmin";
import SideBarOfAdmin from "./SideBarOfAdmin";

const MainNavigationOfAdmin = () => {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MainHeaderOfAdmin handleDrawerOpen={handleDrawerOpen} open={open} />
      <SideBarOfAdmin handleDrawerClose={handleDrawerClose} open={open} />
    </>
  );
};

export default MainNavigationOfAdmin;
