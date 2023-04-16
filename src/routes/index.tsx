import React from "react";
import { PrivateRoutes, ROUTES_PRIVATE } from "./privateRoutes";
import { PublicRoutes, ROUTES_PUBLIC } from "./publicRoutes";

export const ROUTES = {
  ...ROUTES_PRIVATE,
  ...ROUTES_PUBLIC,
};

export const AppRoutes = () => {
  return (
    <>
      <PrivateRoutes></PrivateRoutes>
      <PublicRoutes></PublicRoutes>
    </>
  );
};
