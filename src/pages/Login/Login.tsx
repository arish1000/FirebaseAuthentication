import React, { useState } from "react";
import classes from "./Login.module.scss";
import Logo from "../../assests/logo.webp";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import useFirebase from "../../utils/hooks/useFirebase";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAsync } from "../../redux/actions/user.action";

const Login = () => {
  const { isLoading } = useSelector((state: any) => state?.root?.user);
  const { auth } = useFirebase();
  const dispatch = useDispatch<any>();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        const { email, password } = values;
        const params = {
          auth: auth,
          email: email,
          password,
        };
        dispatch(loginUserAsync(params));
      }}
    >
      {({ values, setFieldValue, handleBlur, errors }) => {
        return (
          <Form>
            <div className={classes.container}>
              <div className={classes.card_main}>
                <div className={classes.logo_container}>
                  <img
                    className={classes.logo_img}
                    alt="logo-image"
                    src={Logo}
                  />
                </div>
                <div className={classes.email_input_container}>
                  <Input
                    name="email"
                    placeholder="Email"
                    value={values?.email}
                    onChange={(e: any) => {
                      setFieldValue("email", e.target.value);
                    }}
                    error={errors && errors?.email}
                    helperText={errors?.email}
                  />
                </div>
                <div className={classes.password_input_container}>
                  <Input
                    name="password"
                    type="password"
                    value={values?.password}
                    onChange={(e: any) => {
                      setFieldValue("password", e.target.value);
                    }}
                    error={errors && errors?.password}
                    helperText={errors?.password}
                  />
                </div>
                <div className={classes.login_btn_container}>
                  <Button rootClassName={classes.login_btn} type="submit">
                    {isLoading ? "Logging in..." : "Login"}
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

export default Login;
