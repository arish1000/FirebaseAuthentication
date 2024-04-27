import React from "react";
import classes from "./ProductCard.module.scss";
import productImage from "../../assests/product_img.jpg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const ProductCard = (props: any) => {
  const { product } = props;
  const navigate = useNavigate();
  const goToViewPage = () => {
    navigate(`/products/${product?.id}`);
  };

  return (
    <div className={classes.product_card}>
      <div className={classes.card_img}>
        <img className={classes.img} src={productImage} />
      </div>
      <div className={classes.product_name}>{product?.name}</div>
      <div className={classes.view_btn}>
        <Button onClick={goToViewPage}>View</Button>
      </div>
    </div>
  );
};

export default ProductCard;
