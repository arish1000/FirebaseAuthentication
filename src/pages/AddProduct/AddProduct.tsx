import React from "react";
import classes from "./AddProduct.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import useHeader from "../../utils/hooks/useHeader";

const AddProduct = () => {
  const { setTitle } = useHeader();
  setTitle("Add Product");
  const handleSubmit = (values: any) => {
    console.log("values==>", values);
  };

  return (
    <Formik
      initialValues={{
        Product_Name: "",
        Product_Category: "",
        Stock_Quantity: "",
      }}
      validationSchema={Yup.object().shape({
        Product_Name: Yup.string().required("This is required"),
        Product_Category: Yup.string().required("This is required"),
        Stock_Quantity: Yup.string().required("This is required"),
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
                    name="Product_Name"
                    placeholder="Enter Name..."
                    value={values?.Product_Name}
                    error={errors?.Product_Name}
                    helperText={errors?.Product_Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className={classes.product_category}>
                  <Input
                    type="text"
                    name="Product_Category"
                    placeholder="Enter Category..."
                    value={values?.Product_Category}
                    error={errors?.Product_Category}
                    helperText={errors?.Product_Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className={classes.product_quantity}>
                  <Input
                    type="text"
                    name="Stock_Quantity"
                    placeholder="Enter Stock Quantity..."
                    value={values?.Stock_Quantity}
                    error={errors?.Stock_Quantity}
                    helperText={errors?.Product_Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className={classes.add_btn}>
                  <Button type="submit">Add Product</Button>
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
