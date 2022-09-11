import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import "./Navbar.scss";
import LoginMenu from "./LoginMenu";
import { useScrollTrigger } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  { name: "Shop", link: "/products" },
  { name: "Collection", link: "/collection" },
  { name: "Blog", link: "/blogs" },
  { name: "Contact", link: "/contactus" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const trigger = useScrollTrigger({ threshold: 70, disableHysteresis: true });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item, index) => (
          <Link key={index} to={item.link}>
            <ListItem
              disablePadding
              sx={{
                ":hover": {
                  color: "#bd8448",
                },
              }}
            >
              <ListItemButton sx={{ textAlign: "center", margin: "12px 0" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="navbar">
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          elevation={trigger ? 24 : 0}
          style={{
            backgroundColor: trigger ? "#fff" : "transparent",
            boxShadow: trigger
              ? "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
              : undefined,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "space-around" },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                color: "black",
                alignSelf: "center",
                display: { sm: "block", md: "none" },
              }}
            >
              <DensitySmallIcon />
            </IconButton>
            <Box sx={{ width: "150px", height: "auto" }}>
              <img className="logo" src={logo} alt="logo" />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: "#a3a3a3",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  <Link to={item.link}>{item.name}</Link>
                </Button>
              ))}
            </Box>
            <Box sx={{ display: "flex" }}>
              <Button
                variant="text"
                sx={{
                  color: "#a3a3a3",
                  "&:hover": {
                    color: "black",
                  },
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
              <Button
                variant="text"
                sx={{
                  color: "#a3a3a3",
                  "&:hover": {
                    color: "black",
                  },
                }}
                startIcon={<ShoppingBasketOutlinedIcon />}
              >
                <Link to="/cart">Cart</Link>
              </Button>
              <Button>
                <LoginMenu />
              </Button>
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
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: {
                sm: "flex",
                md: "none",
              },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
