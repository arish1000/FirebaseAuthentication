import React from "react";
import classes from "./ProductsContainer.module.scss";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useMatch,
} from "react-router-dom";
import AllProducts from "../AllProducts/AllProducts";
import Product from "../Product/Product";

const ProductsContainer = () => {
  const { pathname } = useLocation();
  console.log("pathname->ProductsContainer", pathname);
  return (
    <Routes>
      <Route path="all" element={<AllProducts />} />
      <Route path="/:productId" element={<Product />} />
      <Route path="*" element={<Navigate to={`${pathname}/all`} />} />
    </Routes>
  );
};

export default ProductsContainer;
