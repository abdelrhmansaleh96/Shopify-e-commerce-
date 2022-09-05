import React, { useContext, useReducer } from "react";
import reducer from "../reducers/main_reducer";
import { createTheme } from "@mui/material";

const MainContext = React.createContext();
const initialState = {};
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#bd8448",
    },
  },
});
export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={{ ...state, theme }}>
      {children}
    </MainContext.Provider>
  );
};
// make sure use
export const useMainContext = () => {
  return useContext(MainContext);
};
