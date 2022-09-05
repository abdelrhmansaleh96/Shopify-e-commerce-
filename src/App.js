import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import { useMainContext } from "./context/main_context";
import MainSlider from "./components/ImageSlider/MainSlider";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import Footer from "./components/Footer/Footer";
import Container from "@mui/material";

function App() {
  const { theme } = useMainContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <MainSlider />
        <SectionHeader />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
