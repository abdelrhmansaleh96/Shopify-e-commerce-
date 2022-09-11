import "./App.css";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { useMainContext } from "./context/main_context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../src/pages/Home/Home";
import Products from "../src/pages/Products/Products";
import ContactUs from "./pages/ContactUs/ContactUs";
import Blog from "./pages/Blog/Blog";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";

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
                <Route path="products">
                  <Route index element={<Products />} />
                  <Route path=":productId" element={<SingleProduct />} />
                </Route>
                <Route path="contactus" element={<ContactUs />} />
                <Route path="cart" element={<Cart />} />
                <Route path="blogs" element={<Blog />} />
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
