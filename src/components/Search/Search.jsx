import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [values, setValues] = React.useState({
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values.password);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="Search">
      {" "}
      <div>
        {["top"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              onClick={toggleDrawer(anchor, true)}
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
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",

                  alignItems: "center",
                  height: "35vh",
                }}
              >
                <Typography variant="h3" component="h2">
                  Looking for Something ? Just Type it here :
                </Typography>

                <FormControl sx={{ m: 1, width: "75vw" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Search
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={"text"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Search"
                          edge="end"
                          onClick={() => {
                            console.log(values.password);
                          }}
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Search"
                  />
                </FormControl>
              </Box>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Search;
