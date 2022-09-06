import "./App.css";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { useMainContext } from "./context/main_context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
// import MainSlider from "./components/ImageSlider/MainSlider";
// import Footer from "./components/Footer/Footer";
// import Sale from "./components/Sale/Sale";
// import Trending from "./components/Trending/Trending";
// import Banner from "./components/Banner/Banner";
// import BlogPosts from "./components/BlogPosts/BlogPosts";
// import Discount from "./components/Discount/Discount";
// import HomeImage from "./components/HomeImage/HomeImage";
import Home from "../src/pages/Home/Home";
import Products from "../src/pages/Products/Products";

function App() {
  const { theme } = useMainContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
