import { Button, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lightTheme } from './shared/themes';

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/pagina-inicial"
              element={
                <Button variant="contained" color="primary">
                  Teste Material UI
                </Button>
              }
            />
            <Route path="*" element={<Navigate to={'/pagina-inicial'} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
