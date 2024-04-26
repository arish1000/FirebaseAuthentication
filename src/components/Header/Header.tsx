import React from "react";
import classes from "./Header.module.scss";
import Button from "../Button/Button";
import useLogout from "../../utils/hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { logout } = useLogout();
  const navigate = useNavigate();
  const title = useSelector((state: any) => state?.root?.header?.title);
  const goToHome = () => {
    navigate("/dashboard");
  };
  return (
    <div className={classes.main}>
      <div className={classes.heading}>{title || "Header"}</div>
      <Button rootClassName={classes.logout_btn} onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
