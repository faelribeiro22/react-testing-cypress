import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import purple from "@material-ui/core/colors/purple";

import Routes from "../Routes";
import store from "../../store";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: purple,
    secondary: yellow
  }
});

const App = () => (
  <ReduxProvider store={store}>
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </MuiThemeProvider>
    </>
  </ReduxProvider>
);

export default App;
