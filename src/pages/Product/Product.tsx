import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useHeader from "../../utils/hooks/useHeader";
import classes from "./Product.module.scss";
import Button from "../../components/Button/Button";
import { doc } from "firebase/firestore";
import useFirebase from "../../utils/hooks/useFirebase";
import { firebaserServices } from "../../services/firebaseServices/firebaseServices";
import Input from "../../components/Input/Input";
import { Form, Formik } from "formik";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const formRef = useRef<any>(null);
  const { db } = useFirebase();
  const products = useSelector((state: any) => state?.root?.products?.products);
  const [product, setProduct] = useState<any>({});
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const { setTitle } = useHeader();
  setTitle("Product View");

  useEffect(() => {
    if (productId) {
      const productRef = doc(db, "Products", `${productId}`);
      firebaserServices
        .getProduct(productRef)
        .then((res) => {
          console.log("res->", res.data());
          const data = res.data() || {};
          setProduct({ id: res.id, ...data });
          if (formRef.current) {
            formRef.current.setValues({ id: res.id, ...data });
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [productId]);

  const handleUpdate = (values: any) => {
    if (isEditMode) {
      const data = {
        name: values?.name,
        category: values?.category,
        price: values?.price,
        quantity: values?.quantity,
      };
      const productRef = doc(db, "Products", `${values?.id}`);
      firebaserServices.updateProduct(productRef, data).then((res) => {
        console.log("res", res);
        setIsEditMode(false);
      });
    } else {
      setIsEditMode(true);
    }
  };

  const deleteProduct = () => {
    const productRef = doc(db, "Products", `${product?.id}`);
    firebaserServices
      .deleteProduct(productRef)
      .then((res) => {
        console.log("res", res);
        navigate("/products/all");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        id: product?.id || "",
        name: product?.name || "",
        category: product?.category || "",
        quantity: product?.quantity || "",
        price: product?.price || "",
      }}
      onSubmit={handleUpdate}
    >
      {({ values, handleChange }) => {
        return (
          <Form>
            <div className={classes.main}>
              <div className={classes.row}>
                <div className={classes.heading}>Product Id:</div>
                <div className={classes.value}>{values?.id}</div>
              </div>
              <div className={classes.row}>
                <div className={classes.heading}>Product Name:</div>
                <div className={classes.value}>
                  <Input
                    type="text"
                    name="name"
                    value={values?.name}
                    onChange={handleChange}
                    disabled={!isEditMode}
                  />
                </div>
              </div>
              <div className={classes.row}>
                <div className={classes.heading}>Product Category:</div>
                <div className={classes.value}>
                  <Input
                    type="text"
                    name="category"
                    value={values?.category}
                    onChange={handleChange}
                    disabled={!isEditMode}
                  />
                </div>
              </div>
              <div className={classes.row}>
                <div className={classes.heading}>Product Price:</div>
                <div className={classes.value}>
                  <Input
                    type="text"
                    name="price"
                    value={values?.price}
                    onChange={handleChange}
                    disabled={!isEditMode}
                  />
                </div>
              </div>
              <div className={classes.row}>
                <div className={classes.heading}>Quantity In Stock:</div>
                <div className={classes.value}>
                  <Input
                    type="text"
                    name="quantity"
                    value={values?.quantity}
                    onChange={handleChange}
                    disabled={!isEditMode}
                  />
                </div>
              </div>
              <div className={classes.row}>
                <Button type="submit">{isEditMode ? "Update" : "Edit"}</Button>
                <Button type="button" onClick={deleteProduct}>
                  Delete
                </Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Product;
