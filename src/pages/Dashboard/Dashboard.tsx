import React from "react";
import classes from "./Dashboard.module.scss";
import Button from "../../components/Button/Button";
import useLogout from "../../utils/hooks/useLogout";
import useHeader from "../../utils/hooks/useHeader";
import dashboardImage from "../../assests/dashboardImage.jpg";

const Dashboard = () => {
  const { setTitle } = useHeader();
  const { logout } = useLogout();
  setTitle("Dashboard");
  return (
    <div className={classes.container}>
      <div></div>
    </div>
  );
};

export default Dashboard;
