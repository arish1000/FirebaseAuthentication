import React, { useEffect } from "react";
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
import useFirebase from "../../utils/hooks/useFirebase";
import { collection, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { fetchAllProductsAsync } from "../../redux/actions/products.action";

const ProductsContainer = () => {
  const dispatch = useDispatch<any>();
  const { pathname } = useLocation();
  const { db } = useFirebase();
  const productsCollection = collection(db, "Products");
  useEffect(() => {
    dispatch(fetchAllProductsAsync(productsCollection));
  }, []);
  return (
    <Routes>
      <Route path="all" element={<AllProducts />} />
      <Route path="/:productId" element={<Product />} />
      <Route path="*" element={<Navigate to={`${pathname}/all`} />} />
    </Routes>
  );
};

export default ProductsContainer;
