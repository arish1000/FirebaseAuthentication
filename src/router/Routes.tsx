import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Public from "./Public";
import Private from "./Private";
import Dashboard from "../pages/Dashboard/Dashboard";

function Routes() {
  return (
    <ReactRoutes>
      <Route element={<Public />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<Private />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </ReactRoutes>
  );
}

export default Routes;
