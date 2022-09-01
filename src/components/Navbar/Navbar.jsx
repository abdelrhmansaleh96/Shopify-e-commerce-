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
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import "./Navbar.scss";
import LoginMenu from "./LoginMenu";

const drawerWidth = 240;
const navItems = ["Home", "Shop", "Collection", "Blog", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              ":hover": {
                color: "#bd8448",
              },
            }}
          >
            <ListItemButton sx={{ textAlign: "center", margin: "12px 0" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
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
          sx={{
            backgroundColor: "transparent",
            color: "black",
            boxShadow: "none",
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
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ width: "150px", height: "auto" }}>
              <img className="logo" src={logo} alt="logo" />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#a3a3a3",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  {item}
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
                Cart
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
