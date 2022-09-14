import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useMainContext } from "../context/main_context";

const PrivateRoutes = () => {
  const { user } = useMainContext();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
