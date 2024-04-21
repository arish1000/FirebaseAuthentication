import React from "react";
import classes from "./Dashboard.module.scss";
import Button from "../../components/Button/Button";
import useLogout from "../../utils/hooks/useLogout";

const Dashboard = () => {
  const { logout } = useLogout();
  return (
    <div className={classes.container}>
      <div>Dashboad Page</div>
      <Button rootClassName={classes.logout_btn} onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
