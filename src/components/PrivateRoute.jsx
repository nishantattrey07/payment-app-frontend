/* eslint-disable react/prop-types */
import { useRecoilValue } from "recoil";
import { isAuthenticated } from "../store/atoms/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = ({ component }) => {
  const navigate = useNavigate();
  const isAuth = useRecoilValue(isAuthenticated);

  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);

  return isAuth ? component : null;
};

export default PrivateRoute;
