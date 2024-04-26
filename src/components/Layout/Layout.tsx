import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import classes from "./Layout.module.scss";
import logo from "../../assests/logo.webp";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

const NAVLINKS = [
  { title: "All Products", to: "/products" },
  { title: "Add Product", to: "/add-product" },
];

const Layout = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/dashboard");
  return (
    <div className={classes.layout_container}>
      <div className={classes.side_container}>
        <div className={classes.logo_container}>
          <img className={classes.logo} src={logo} onClick={goToHome} />
        </div>
        <div className={classes.navbar_container}>
          {NAVLINKS?.map((item: any, index: number) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.navlink_active : classes.navlink
                }
                key={index}
                to={item?.to}
              >
                {item?.title}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className={classes.main_section_container}>
        <div className={classes.header_container}>
          <Header />
        </div>
        <div className={classes.outlet_container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
