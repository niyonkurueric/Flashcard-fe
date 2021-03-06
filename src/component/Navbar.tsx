import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import img from "../image/Tesla,_Inc.-Logomark-Black-Logo.wine.svg";
import { Link } from "react-router-dom";
interface Props {
  window?: () => Window;
}
const Logimage = styled("img")(() => ({
  width: 80,
  height: 80,
}));
const drawerWidth = 240;
export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logimage src={img} />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>Home</ListItemText>
            <ListItemText>About us</ListItemText>
            <ListItemText>Contact</ListItemText>
            <Link style={{ textDecoration: "none" }} to="/cards">
              <Button sx={{ color: "#fff" }}>Cards</Button>
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/login"
            >
              <Button sx={{ color: "#fff" }}>Login</Button>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Logimage src={img} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link style={{ color: "black", textDecoration: "none" }} to="/">
              {" "}
              <Button sx={{ color: "#fff" }}>Home</Button>
            </Link>
            <Button sx={{ color: "#fff" }}>About us</Button>
            <Button sx={{ color: "#fff" }}>Contact</Button>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/cards"
            >
              <Button sx={{ color: "#fff" }}>Cards</Button>
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/signup"
            >
              <Button sx={{ color: "#fff" }}>Signup</Button>
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/login"
            >
              <Button sx={{ color: "#fff" }}>Login</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
