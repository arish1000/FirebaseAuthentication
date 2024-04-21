import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const user = useSelector((state: any) => state?.root?.user?.user);
  return <>{user ? <Outlet /> : <Navigate to="/" replace />}</>;
};

export default Private;
