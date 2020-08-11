import React, { createContext } from "react";

interface AppContextInterface {
  handleDrawerOpen: () => void;
}

const AppContext = createContext<AppContextInterface | any>(null);

export default AppContext;
