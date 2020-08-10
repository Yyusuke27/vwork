import React, { createContext } from "react";

interface AppContextInterface {
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  menu: null;
  HandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  HandleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  AvatarMenu: null;
  OpenTask: () => void;
  CloseTask: () => void;
  openTask: boolean;
  OpenProject: () => void;
  CloseProject: () => void;
  openProject: boolean;
  OpenMember: () => void;
  CloseMember: () => void;
  openMember: boolean;
  OpenProfile: () => void;
  CloseProfile: () => void;
  openProfile: boolean;
}

const AppContext = createContext<AppContextInterface | any>(null);

export default AppContext;
