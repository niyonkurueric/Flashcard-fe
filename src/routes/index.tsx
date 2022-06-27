import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dashboard from "../page/Dashboard";
import Login from "../page/Login";
import Signup from "../page/Signup";
import Cards from "../page/Cards";
import AdminPanel from "../page/AdminPanel";
import CreateNewCard from "../page/createNewCard";
import Update from "../page/Update";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1A2D6D",
    },
    secondary: {
      main: "#0B2C5f",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
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
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/createNewCard" element={<CreateNewCard />} />
        <Route path="/updateCard/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
export default AllRoutes;
