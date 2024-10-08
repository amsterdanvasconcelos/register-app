import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[500],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: cyan[400],
      dark: cyan[500],
      light: cyan[300],
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#FFFFFF',
      default: '#F7F6F3',
    },
  },
});

export { lightTheme };
