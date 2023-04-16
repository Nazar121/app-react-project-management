import React from "react";
import { Routes, Route, RouteProps } from "react-router-dom";

export const ROUTES_PUBLIC = {};

const publicRoutes: RouteProps[] = [];

export const PublicRoutes = () => {
  return (
    <>
      {publicRoutes.map((route: RouteProps) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </>
  );
};
