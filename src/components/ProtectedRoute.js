// ProtectedRoute.js
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./login/auth-context";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      navigate("/login");
    }
  });

  return children;
};

export default ProtectedRoute;
