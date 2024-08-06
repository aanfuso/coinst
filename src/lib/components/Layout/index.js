import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Footer from './Footer';

export default function Layout(props) {
  const {
    children,
    theme,
    footerProps,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
      <Footer {...footerProps}/>
    </ThemeProvider>
  )
};
