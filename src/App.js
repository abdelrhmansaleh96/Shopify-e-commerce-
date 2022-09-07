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
                <Route path="contactus" element={<ContactUs />} />
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
