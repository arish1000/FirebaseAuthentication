import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Public from "./Public";
import Private from "./Private";
import Dashboard from "../pages/Dashboard/Dashboard";
import Layout from "../components/Layout/Layout";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductsContainer from "../pages/ProductsContainer/ProductsContainer";
import Signup from "../pages/Signup/Signup";

function Routes() {
  return (
    <ReactRoutes>
      <Route element={<Public />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<Private />}>
        <Route element={<Layout />}>
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route path="/products/*" element={<ProductsContainer />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
      </Route>
    </ReactRoutes>
  );
}

export default Routes;
