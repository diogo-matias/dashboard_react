import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@mui/material";
import { ligthTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={ligthTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
