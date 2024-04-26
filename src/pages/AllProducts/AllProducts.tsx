import React from "react";
import { useLocation } from "react-router-dom";
import useHeader from "../../utils/hooks/useHeader";

const AllProducts = () => {
  const { setTitle } = useHeader();
  setTitle("All Products");
  const { pathname } = useLocation();
  console.log("pathname->AllProducts", pathname);
  return <div>AllProducts</div>;
};

export default AllProducts;
