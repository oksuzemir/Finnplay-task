import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login, MainList } from "./components";
import * as ROUTES from "./configs/RouterConfig";

const RoutePages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.LOGIN} element={<Login />} />
        <Route exact path={ROUTES.MAIN} element={<MainList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePages;
