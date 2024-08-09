import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
  const {
    children,
    theme,
    navbarProps,
    footerProps,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar {...navbarProps}/>
      {children}
      <Footer {...footerProps}/>
    </ThemeProvider>
  )
};
