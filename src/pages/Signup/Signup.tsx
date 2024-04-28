import React from "react";
import classes from "./Signup.module.scss";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Logo from "../../assests/logo.webp";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import useFirebase from "../../utils/hooks/useFirebase";
import { useDispatch } from "react-redux";
import { loginUserAsync } from "../../redux/actions/user.action";
import { firebaseConfig } from "../../utils/helpers";
import { firebaserServices } from "../../services/firebaseServices/firebaseServices";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { db, auth } = useFirebase();
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/");
  };
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        password: Yup.string()
          .min(8, "Password should be atleast 8 characters")
          .required("Required"),
      })}
      onSubmit={(values) => {
        const { firstname, lastname, email, password } = values;
        const data = {
          auth,
          email,
          password,
        };
        firebaserServices
          .signup(data)
          .then((res) => {
            console.log("res", res);
            const docRef = doc(db, "users", res.user.uid);
            setDoc(docRef, {
              ...values,
            });
            navigate("/");
          })
          .catch((err) => {
            console.log("err", err);
          });
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
                <div className={classes.name_input_container}>
                  <Input
                    name="firstname"
                    placeholder="First Name"
                    value={values?.firstname}
                    onChange={(e: any) => {
                      setFieldValue("firstname", e.target.value);
                    }}
                    error={errors && errors?.firstname}
                    helperText={errors?.firstname}
                  />
                  <Input
                    name="lastname"
                    placeholder="Last Name"
                    value={values?.lastname}
                    onChange={(e: any) => {
                      setFieldValue("lastname", e.target.value);
                    }}
                    error={errors && errors?.lastname}
                    helperText={errors?.lastname}
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
                    placeholder="Password"
                    value={values?.password}
                    onChange={(e: any) => {
                      setFieldValue("password", e.target.value);
                    }}
                    error={errors && errors?.password}
                    helperText={errors?.password}
                  />
                </div>
                <div className={classes.signup_btn_container}>
                  <Button rootClassName={classes.signup_btn} type="submit">
                    Sign Up
                  </Button>
                </div>
                <div className={classes.have_account} onClick={goToLogin}>
                  I already have an account
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Signup;
