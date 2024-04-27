import React from "react";
import { useLocation } from "react-router-dom";
import useHeader from "../../utils/hooks/useHeader";
import { useSelector } from "react-redux";
import classes from "./AllProducts.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";

const AllProducts = () => {
  const { setTitle } = useHeader();
  const { isLoading, products } = useSelector(
    (state: any) => state?.root?.products
  );
  setTitle("All Products");
  const { pathname } = useLocation();
  console.log("isLoading", isLoading);

  return (
    <div className={classes.products_container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {products?.map((product: any) => {
            return <ProductCard product={product} />;
          })}
        </>
      )}
    </div>
  );
};

export default AllProducts;
