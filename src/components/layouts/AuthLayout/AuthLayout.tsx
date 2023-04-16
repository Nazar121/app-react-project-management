import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./AuthLayout.module.scss";

export const AuthLayout = () => {
  return (
    <div>
      <h1>AuthLayout</h1>

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
