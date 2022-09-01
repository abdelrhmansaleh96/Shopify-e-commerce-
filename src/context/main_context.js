import React, { useContext } from "react";
import reducer from "../reducers/main_reducer";

const MainContext = React.createContext();
const initialState = {};
export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={{ ...state }}>{children}</MainContext.Provider>
  );
};
// make sure use
export const useMainContext = () => {
  return useContext(MainContext);
};
