import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Login from './Login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A2130',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
}

export default App;
