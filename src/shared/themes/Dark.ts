import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: blue[600],
      dark: blue[800],
      light: blue[400],
      contrastText: "#ffffff",
    },

    secondary: {
      main: purple[700],
      dark: purple[800],
      light: purple[500],
      contrastText: "#ffffff",
    },

    background: {
      default: "#202124",
      paper: "#303134",
    },
  },
});
