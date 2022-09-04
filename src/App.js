import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import { useMainContext } from "./context/main_context";
import MainSlider from "./components/ImageSlider/MainSlider";

function App() {
  const { theme } = useMainContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <MainSlider />
      </ThemeProvider>
    </>
  );
}

export default App;
