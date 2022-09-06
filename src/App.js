import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import { useMainContext } from "./context/main_context";
import MainSlider from "./components/ImageSlider/MainSlider";
import Footer from "./components/Footer/Footer";
import Sale from "./components/Sale/Sale";
import Trending from "./components/Trending/Trending";
import Banner from "./components/Banner/Banner";
import BlogPost from "./components/BlogPost/BlogPost";
import BlogPosts from "./components/BlogPosts/BlogPosts";

function App() {
  const { theme } = useMainContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <MainSlider />
        <Trending />
        <Banner />
        <Sale />
        <BlogPosts />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
