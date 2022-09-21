import React from "react";
import "./Login.scss";
import Tabs from "@mui/material/Tabs";
import { Button, Tab, TextField, Container } from "@mui/material";
import MainBreadcrumb from "../../components/MainBreadcrumb/MainBreadcrumb";
import { useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useMainContext } from "../../context/main_context";

const Login = () => {
  const [value, setValue] = React.useState(0);
  const [mail, setMail] = React.useState("");
  const { addUser } = useMainContext();
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
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            gap: "20px",
          }}
        >
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          {value === 0 ? (
            <div className="signIn">
              <TextField
                id="outlined-basic"
                label="Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                variant="outlined"
                sx={{
                  width: {
                    xs: "250px",
                    md: "650px",
                  },
                  marginBottom: "35px",
                }}
              />
              <FormControl
                sx={{
                  m: 1,
                  width: {
                    xs: "250px",
                    md: "650px",
                  },
                }}
                variant="outlined"
              >
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
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button
                variant="outlined"
                sx={{
                  width: {
                    xs: "250px",
                    md: "650px",
                  },
                  margin: "35px 0",
                }}
                // onClick={addUser(mail)}
                onClick={() => {
                  addUser(mail);
                }}
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
                    width: {
                      xs: "120px",
                      md: "300px",
                    },
                    marginBottom: "35px",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  sx={{
                    width: {
                      xs: "120px",
                      md: "300px",
                    },
                    marginBottom: "35px",
                  }}
                />
              </div>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                  width: {
                    xs: "250px",
                    md: "650px",
                  },
                  marginBottom: "35px",
                }}
              />
              <FormControl
                sx={{
                  m: 1,
                  width: {
                    xs: "250px",
                    md: "650px",
                  },
                }}
                variant="outlined"
              >
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
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button
                variant="contained"
                sx={{
                  width: {
                    xs: "250px",
                    md: "650px",
                  },
                  margin: "35px 0",
                }}
              >
                Create Account
              </Button>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Login;
