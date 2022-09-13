import * as React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Badge,
  useScrollTrigger,
  AppBar,
} from "@mui/material";

import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useMainContext } from "../../context/main_context";
import Search from "../Search/Search";
import LoginMenu from "./LoginMenu";

const drawerWidth = 240;

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  { name: "Shop", link: "/products" },
  { name: "Collections", link: "/collections" },
  { name: "Blog", link: "/blogs" },
  { name: "Contact", link: "/contactus" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const trigger = useScrollTrigger({ threshold: 70, disableHysteresis: true });
  const { total_items } = useMainContext();

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
  const navigate = useNavigate();
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
              <img
                className="logo"
                src={logo}
                alt="logo"
                onClick={() => {
                  navigate("/");
                }}
              />
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Search />

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
                <Badge
                  badgeContent={total_items}
                  sx={{
                    ".css-1iinujz-MuiBadge-badge": {
                      border: "1px solid #c0932f",
                      fontSize: "14px",
                    },
                  }}
                >
                  <Link to="/cart">Cart</Link>
                </Badge>
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

export default Navbar;
