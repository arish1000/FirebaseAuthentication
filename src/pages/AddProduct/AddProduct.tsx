import React, { useRef, useState } from "react";
import classes from "./AddProduct.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import useHeader from "../../utils/hooks/useHeader";
import { collection } from "firebase/firestore";
import useFirebase from "../../utils/hooks/useFirebase";
import { firebaserServices } from "../../services/firebaseServices/firebaseServices";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { setTitle } = useHeader();
  const navigate = useNavigate();
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const formRef = useRef<any>();
  const { db } = useFirebase();
  setTitle("Add Product");
  const handleSubmit = (values: any) => {
    setIsAddingProduct(true);
    const product_details = {
      ...values,
    };
    const productCollection = collection(db, "Products");
    firebaserServices
      .addProduct(productCollection, product_details)
      .then((res) => {
        console.log("res=>", res);
        if (formRef.current) {
          formRef.current.resetForm();
          navigate("/products/all");
        }
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setIsAddingProduct(false);
      });
  };

  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        name: "",
        category: "",
        quantity: "",
        price: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("This is required"),
        category: Yup.string().required("This is required"),
        quantity: Yup.string().required("This is required"),
        price: Yup.string().required("This is required"),
      })}
      onSubmit={handleSubmit}
    >
      {({ values, handleSubmit, handleChange, handleBlur, errors }) => {
        console.log("values=>", values);
        return (
          <Form>
            <div className={classes.main}>
              <div className={classes.product_form}>
                <div className={classes.main_heading}>Add product</div>
                <div className={classes.product_name}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter Name..."
                    value={values?.name}
                    error={errors?.name}
                    helperText={errors?.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className={classes.product_category}>
                  <Input
                    type="text"
                    name="category"
                    placeholder="Enter Category..."
                    value={values?.category}
                    error={errors?.category}
                    helperText={errors?.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className={classes.product_quantity}>
                  <Input
                    type="text"
                    name="quantity"
                    placeholder="Enter Stock Quantity..."
                    value={values?.quantity}
                    error={errors?.quantity}
                    helperText={errors?.quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className={classes.product_price}>
                  <Input
                    type="text"
                    name="price"
                    placeholder="Enter Price..."
                    value={values?.price}
                    error={errors?.price}
                    helperText={errors?.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className={classes.add_btn}>
                  <Button type="submit">
                    {isAddingProduct ? "Adding..." : "Add Product"}
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddProduct;
