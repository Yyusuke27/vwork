import React, { FC } from "react";
import MainHeader from "./MainHeader";
import SideBar from "./SideBar";

interface MainNavigationProps {
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  open: boolean;
}

const MainNavigation: FC<MainNavigationProps> = ({
  handleDrawerOpen,
  handleDrawerClose,
  open,
}) => {
  return (
    <>
      <MainHeader handleDrawerOpen={handleDrawerOpen} open={open} />
      <SideBar handleDrawerClose={handleDrawerClose} open={open} />
    </>
  );
};

export default MainNavigation;
