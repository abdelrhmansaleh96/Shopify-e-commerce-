import React, { useEffect } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Discount from "../src/components/Discount/Discount";
import Footer from "../src/components/Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <Navbar />

      {children}
      <Discount />
      <Footer />
    </>
  );
};

export default Layout;
