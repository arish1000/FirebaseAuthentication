import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Public = () => {
  const user = useSelector((state: any) => state?.root?.user?.user);
  return <>{user ? <Navigate to="/dashboard" /> : <Outlet />}</>;
};

export default Public;
