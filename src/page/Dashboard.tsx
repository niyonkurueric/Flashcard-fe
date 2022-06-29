import React from "react";
import { Box, Typography, Button, Grid, styled } from "@mui/material";
import DrawerAppBar from "../component/Navbar";
import { Link } from "react-router-dom";
const Line = styled("div")(({ theme }) => ({
  position: "absolute",
  backgroundColor: "lightblue",
  width: "285px",
  height: "7px",
  left: "40%",
  marginTop: "20px",
  borderRadius: "30px",
  zIndex: 0,
  "@media(max-width:900px)": {
    left: "31.5%",
  },
  "@media(max-width:400px)": {
    left: "13%",
  },
}));
function Dashboard() {
  return (
    <>
      <DrawerAppBar />
      <Box paddingTop={20} textAlign="center">
        <Typography
          variant="h4"
          fontSize={30}
          className="p"
          fontFamily="Josefin Sans, sans-serif"
          fontWeight={900}
          color="#00095E"
        >
          knowledge Rehab
        </Typography>
        <Line />
        <Typography
          variant="h6"
          padding="0px 500px"
          fontSize={15}
          paddingTop={5}
          color="lightblack"
        >
          Learn general trivia and became culturally literate with +200 smart
          and efficient flashcards Learn general trivia with the world's most
          comprehensive collection of smart flashcards. Become smarter about
          art, history, geography, science, & much more.
        </Typography>
      </Box>
      <Grid container paddingTop={10} direction="column" alignItems="center">
        <Grid item>
          <Link style={{ textDecoration: "none" }} to="/cards">
            {" "}
            <Button variant="contained">START STUDYING</Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
export default Dashboard;
