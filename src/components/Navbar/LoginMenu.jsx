import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import { useNavigate } from "react-router-dom";

export default function LoginMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-IconButton"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <DensityMediumOutlinedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/login");
            setAnchorEl(null);
          }}
        >
          Login
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/login");
            setAnchorEl(null);
          }}
        >
          Register
        </MenuItem>
      </Menu>
    </div>
  );
}
