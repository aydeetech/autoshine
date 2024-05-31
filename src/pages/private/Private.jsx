import Cookies from "js-cookie";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const Private = () => {
  const token = Cookies.get("token");

  return <div>{token ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};
