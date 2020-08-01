import { createContext } from "react";

interface AppContextInterface {
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  open: boolean;
}

const AppContext = createContext<AppContextInterface | null>(null);

export default AppContext;
