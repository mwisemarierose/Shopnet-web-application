import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import {baseTheme} from './assets/global/Theme-variable'
import Themeroutes from "./routes/Router";
import {store} from './store'
import { Provider } from 'react-redux'
import Navbar from "./layouts/Navbar/Navbar";

const App = () => {
  const routing = useRoutes(Themeroutes);
  const theme = baseTheme;
  return (
    <Provider store={store} >
    <ThemeProvider theme={theme}>
      {routing}
    </ThemeProvider>
    </Provider>
  );
};

export default App;
