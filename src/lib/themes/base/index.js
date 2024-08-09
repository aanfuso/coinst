import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { palette } from "./pallete";
import { typography } from "./typography";

const theme = createTheme({
  palette,
  typography,
});

export default responsiveFontSizes(theme);
