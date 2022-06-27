import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

export const ligthTheme = createTheme({
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
      default: "#ffffff",
      paper: "#f7f6f3",
    },
  },
});
