import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from '../page/Dashboard';
import Login from '../page/Login';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1A2D6D',
    },
    secondary: {
      main: '#0B2C5f',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
const AllRoutes = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
       <Route  path="/" element={<Dashboard />} />
        <Route  path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
export default AllRoutes;