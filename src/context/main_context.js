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
  loading: false,
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
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const toggleAmount = (id, value) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, value } });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    // console.log(state.cart, state.total_items, state.total_amount);
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.cart]);
  return (
    <MainContext.Provider
      value={{
        ...state,
        theme,
        addToCart,
        removeFromCart,
        toggleAmount,
        clearCart,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
// make sure use
export const useMainContext = () => {
  return useContext(MainContext);
};
