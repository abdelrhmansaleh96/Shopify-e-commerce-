import React from "react";
import "./Login.scss";
import Tabs from "@mui/material/Tabs";
import { Button, Tab, TextField } from "@mui/material";
import MainBreadcrumb from "../../components/MainBreadcrumb/MainBreadcrumb";
import { useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChangeForPass = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Login">
      <MainBreadcrumb location={location} />
      <div className="container">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        {value === 0 ? (
          <div className="signIn">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{
                width: "650px",
                marginBottom: "35px",
              }}
            />
            <FormControl sx={{ m: 1, width: "650px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChangeForPass("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              variant="outlined"
              sx={{ width: "650px", margin: "35px 0" }}
            >
              SignIn
            </Button>
            <Button variant="contained">Forget Password</Button>
          </div>
        ) : (
          <div className="signIn">
            <div className="name">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                sx={{
                  width: "300px",
                  marginBottom: "35px",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                sx={{
                  width: "300px",
                  marginBottom: "35px",
                }}
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{
                width: "650px",
                marginBottom: "35px",
              }}
            />
            <FormControl sx={{ m: 1, width: "650px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChangeForPass("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              variant="contained"
              sx={{ width: "650px", margin: "35px 0" }}
            >
              Create Account
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
