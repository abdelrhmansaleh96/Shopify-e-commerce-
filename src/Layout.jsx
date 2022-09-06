import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Discount from "../src/components/Discount/Discount";
import Footer from "../src/components/Footer/Footer";

const Layout = ({ children }) => {
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
