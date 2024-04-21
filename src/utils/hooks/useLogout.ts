import React from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch();
  const naviagate = useNavigate();

  const logout = () => {
    dispatch(resetUser());
    naviagate("/");
  };

  return { logout };
};

export default useLogout;
