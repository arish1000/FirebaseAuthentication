import React from "react";
import classes from "./Header.module.scss";
import Button from "../Button/Button";
import useLogout from "../../utils/hooks/useLogout";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { logout } = useLogout();
  const navigate = useNavigate();
  const location = useLocation();
  const title = useSelector((state: any) => state?.root?.header?.title);
  const isPorductViewPage = title === "Product View";

  const goToHome = () => {
    navigate("/dashboard");
  };

  const goBack = () => {
    navigate("/products/all");
  };
  return (
    <div className={classes.main}>
      {isPorductViewPage && (
        <div className={classes.back_btn} onClick={goBack}>{`< Back`}</div>
      )}
      {!isPorductViewPage && (
        <div className={classes.heading}>{title || "Header"}</div>
      )}
      <Button rootClassName={classes.logout_btn} onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
