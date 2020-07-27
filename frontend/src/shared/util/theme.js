import {createMuiTheme} from "@material-ui/core";

import Color from "./color";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: Color.VWORK_RED
    },
    secondary: {
      main: Color.VWORK_DARK_BLUE
    }
  }
})
