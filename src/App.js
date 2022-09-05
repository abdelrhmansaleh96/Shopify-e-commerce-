import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import { useMainContext } from "./context/main_context";
import MainSlider from "./components/ImageSlider/MainSlider";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import BlogPost from "./components/BlogPost/BlogPost";

function App() {
  const { theme } = useMainContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <MainSlider />
        <SectionHeader />
        <BlogPost />
      </ThemeProvider>
    </>
  );
}

export default App;
