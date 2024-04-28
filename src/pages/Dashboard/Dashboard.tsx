import React, { useEffect } from "react";
import classes from "./Dashboard.module.scss";
import Button from "../../components/Button/Button";
import useLogout from "../../utils/hooks/useLogout";
import useHeader from "../../utils/hooks/useHeader";
import dashboardImage from "../../assests/dashboardImage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import useFirebase from "../../utils/hooks/useFirebase";
import { setUser } from "../../redux/reducers/userReducer";

const Dashboard = () => {
  const { setTitle } = useHeader();
  const { logout } = useLogout();
  const userId = useSelector(
    (state: any) => state?.root?.user?.user?.user?.uid
  );
  const dispatch = useDispatch();
  const { db } = useFirebase();
  console.log("userid", userId);
  setTitle("Dashboard");

  useEffect(() => {
    if (userId) {
      const docRef = doc(db, "users", userId);
      getDoc(docRef).then((res) => {
        const userData = res?.data();
        dispatch(setUser(userData));
      });
    }
  }, [userId]);

  return <div className={classes.container}></div>;
};

export default Dashboard;
