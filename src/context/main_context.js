import React, { useContext, useReducer } from "react";
import reducer from "../reducers/main_reducer";
import { createTheme } from "@mui/material";
import { useEffect } from "react";

const MainContext = React.createContext();
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
};
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#bd8448",
    },
    secondary: {
      main: "#6c6c6c",
    },
  },
});

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    console.log(state.cart);
  }, [state.cart]);
  return (
    <MainContext.Provider value={{ ...state, theme, addToCart }}>
      {children}
    </MainContext.Provider>
  );
};
// make sure use
export const useMainContext = () => {
  return useContext(MainContext);
};
